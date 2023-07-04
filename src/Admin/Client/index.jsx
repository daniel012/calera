import * as React from 'react';
import axios from 'axios';
import { clientStyle } from '../indexClassName';
import {AgentSearch} from './AgentSearch';
import PhoneInput from 'react-phone-input-2';
import { basicErrorToast,basicWarningMessage, basicSuccessMessage, url } from '../../utils';

const Client = () => {
    const [phone, setPhone] = React.useState('52');
    const [agent, setAgent] = React.useState('');
    const [name, setName] = React.useState('');
    const [rfc, setRFC] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [id, setId] = React.useState('');

    const className = clientStyle(); 

    const errorShow  = (error) => {
        if(error.response.status === 409){
            basicWarningMessage(`Cliente ${name} ya existe`);
        }else {
            basicErrorToast(error, `${error.response.status} Error, contacte al administrador`);
        }
    }

    const showSuccess = () => {
        basicSuccessMessage(`Cliente ${name} ${id?'actualizado':'insertado'}`);
        setId('');
        setAgent('');
        setPhone('52');
        setName('');
        setRFC('');
        setEmail('');
        setId('');
    }

    const submitFrom = (event) => {
        event.preventDefault();
        let hasError = false;
        if(phone.toString().length !== 12){
            hasError = true; 
            basicWarningMessage('Numero incorrecto');
        }
    
        if( !hasError ) {
            if(!id) {
                axios.post(`${url}/client`,{            
                    "correo": email,
                    "agentId": agent.id,
                    "nombre": name,
                    "rfc":rfc,
                    "telefono":phone
                })
                .then(()=> showSuccess() )
                .catch((error)=> errorShow(error));
            } else {
                axios.put(`${url}/client/${id}`,{            
                    "correo": email,
                    "idagente": agent.id,
                    "nombre": name,
                    "rfc":rfc,
                    "telefono":phone
                })
                .then(()=> showSuccess() )
                .catch((error)=> errorShow(error));
            }
            
        }
    } 

    const searchClient = () => {
        if(name) {
            axios.get(`${url}/client/${name}`)
            .then((value)=> {
                if(value.status === 200){
                    setName(value.data[0].nombre);
                    setRFC(value.data[0].rfc);
                    setPhone(value.data[0].telefono);
                    setEmail(value.data[0].correo);
                    setAgent(()=> {
                        return {'id': value.data[0].agente.id, 'label':value.data[0].agente.name}
                    });
                    setId(value.data[0].id);
                } else if(value.status === 204) {
                    setId('');
                }
            }).catch((error)=> basicWarningMessage(error));
        }
    }

    return(
        <form  onSubmit={submitFrom} className={className.container}>
        <div>
            <label htmlFor='clientName' >Nombre: </label>
            <input type={'text'} required id='clientName' value={name} onBlur={searchClient} onChange={(evt)=> setName(evt.target.value)} />
        </div>
        <div>
            <label htmlFor='clientEmail' >Correo: </label>
            <input type={'email'} required id='clientEmail' value={email} onChange={(evt)=> setEmail(evt.target.value)}/>
        </div>
        <div style={{
            display: 'flex'
        }}>
            <label style={{
                textAlign: 'left'
            }} htmlFor='clientAgent' >Correo de agente: </label>
            <AgentSearch
                agent={agent}
                onSetAgent={(value) => setAgent(value)}
            />
        </div>
        <div>
            <label htmlFor='clientRFC' >RFC: </label>
            <input type={'text'} required id='clientRFC' value={rfc} onChange={(evt)=> setRFC(evt.target.value)} />
        </div>
        <div className={className.inputNumberContainer}>
            <label htmlFor='clientNumber' >Telefono: </label>
            <PhoneInput
                    country={'mx'}
                    onlyCountries={['mx']}
                    inputProps={{
                        required: true,
                    }}
                    containerStyle={{
                        maxWidth: "200px",
                    }}
                    inputStyle={{
                        maxWidth: '100%'
                    }}
                    value={phone}
                    onChange={(newPhone) => {
                        setPhone(newPhone);
                    }}
                />
        </div>
        <button>{id?'Editar':'Agregar'}</button>
    </form>
    )
}

export  default Client;