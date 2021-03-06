import * as React from 'react';
import axios from 'axios';
import { clientStyle } from '../indexClassName';
import PhoneInput from 'react-phone-input-2';
import { basicErrorToast,basicWarningMessage, basicSuccessMessage, url } from '../../utils';

const Client = () => {
    const [phone, setPhone] = React.useState('52');
    const [agent, setAgent] = React.useState('');
    const [infoAgent, setInfoAgent] = React.useState('');
    const [name, setName] = React.useState('');
    const [rfc, setRFC] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [id, setId] = React.useState('');

    const className = clientStyle(); 

    const errorShow  = (error) => {
        if(error.response.status === 409){
            basicWarningMessage(`Usuario ${name} ya existe`);
        }else {
            basicErrorToast(error, `${error.response.status} Error, contacte al administrador`);
        }
    }

    const showSuccess = () => {
        basicSuccessMessage(`Usuario ${name} ${id?'actualizado':'insertado'}`);
        setId('');
        setInfoAgent('');
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
        if(!infoAgent) {
            hasError = true;
            basicWarningMessage('Validar agente');
        }
        if( !hasError ) {
            if(!id) {
                axios.post(`${url}/client`,{            
                    "correo": email,
                    "correoAgente": infoAgent.email,
                    "nombre": name,
                    "rfc":rfc,
                    "telefono":phone
                })
                .then(()=> showSuccess() )
                .catch((error)=> errorShow(error));
            } else {
                axios.put(`${url}/client/${id}`,{            
                    "correo": email,
                    "idagente": infoAgent.id,
                    "nombre": name,
                    "rfc":rfc,
                    "telefono":phone
                })
                .then(()=> showSuccess() )
                .catch((error)=> errorShow(error));
            }
            
        }
    } 
    const searchAgent = (evt) => {
        evt.preventDefault();
        axios.get(`${url}/agent/${agent}`).then((value)=> {
            if(value.data.length !== 0){
                setInfoAgent(value.data[0]);
            } else {
                basicWarningMessage('Agente no encontrado');
            }
        }).catch((error)=> basicErrorToast(error,'Error en busqueda de agente'));
    }

    const delteAgent = () => {setInfoAgent(''); setAgent('');}

    const searchClient = () => {
        if(email) {

            axios.get(`${url}/client/${email}`)
            .then((value)=> {
                if(value.status === 200){
                    setName(value.data[0].nombre);
                    setRFC(value.data[0].rfc);
                    setPhone(value.data[0].telefono);
                    setEmail(value.data[0].correo);
                    setInfoAgent(value.data[0].agente);
                    setId(value.data[0].id);
                } 
            }).catch((error)=> {
                console.error('error: ',error);
            });
        }
    }

    return(
        <form  onSubmit={submitFrom} className={className.container}>
        <div>
            <label htmlFor='clientEmail' >Correo: </label>
            <input type={'email'} required id='clientEmail' onBlur={searchClient}  value={email} onChange={(evt)=> setEmail(evt.target.value)}/>
        </div>
        <div style={{
            display: 'flex'
        }}>
            <label style={{
                textAlign: 'left'
            }} htmlFor='clientAgent' >Correo de agente: </label>
            {infoAgent === '' ? (<>
                <input required id='clientAgent' type={'email'} value={agent} onChange={(e)=>setAgent(e.target.value)}/>
                <button onClick={searchAgent} style={{
                    marginLeft: '10px'
                    }}>Validar
                </button>
            </>):(
                <div style={{
                    display: 'flex'
                }}>
                    <label style={{
                        width: 'fit-content'
                    }}>{infoAgent.email}</label>
                    <img alt='delete client' src="/delete.svg" onClick={delteAgent}></img>
                </div>
            )}
        </div>
        <div>
            <label htmlFor='clientName' >Nombre: </label>
            <input type={'text'} required id='clientName' value={name} onChange={(evt)=> setName(evt.target.value)} />
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