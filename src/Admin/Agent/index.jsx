import * as React from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import { clientStyle } from '../indexClassName';
import { basicErrorToast,basicWarningMessage, basicSuccessMessage, url } from '../../utils';

const Agent = () => {
    const [phone, setPhone] = React.useState('52');
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [id, setId] = React.useState('');


    const className = clientStyle(); 
    const showSuccess = (type) => {
        basicSuccessMessage(`Agente ${name} ${type === 'insert'? 'creado':'actualizado'}`);
        setName('');
        setEmail('');
        setAddress('');
        setPhone('52');
        setId('');
        
    }

    const showError = (type, error) => {
        basicErrorToast(error,`No se pudo crear al ${type === 'insert'? 'insertar':'actualizar'} contacta al administrador`);
    }

    const submitFrom = (event) => {
        event.preventDefault();        

        if(phone.toString().length !== 12){   
            basicWarningMessage('Numero incorrecto');
        } else {
            if( !id ) {
                axios.post(`${url}/agent`,{
                    name,
                    address, 
                    email,
                    phone
                    })
                    .then(()=> showSuccess('insert'))
                    .catch((e)=> showError('insert', e));
            } else {
                axios.put(`${url}/agent/${id}`,{
                    name,
                    address, 
                    email,
                    phone
                    })
                    .then(()=> showSuccess('put'))
                    .catch((e)=> showError('put', e));
            }
        }
    } 

    const searchPrevAgent = (evt) => {
        if(evt.target.value) {
            axios.get(`${url}/agent/${evt.target.value}`)
            .then((value)=>{
                if(value.status === 200 ) {
                    setName(value.data[0].name);
                    setEmail(value.data[0].email);
                    setPhone(value.data[0].number);
                    setAddress(value.data[0].address);
                    setId(value.data[0].id);
                } else {
                    setId('');
                }
            }).catch((error)=> basicErrorToast(error));
        }
    }

    return(
        <form  onSubmit={submitFrom} className={className.container}>
            <div>
                <label htmlFor='agentEmail' >Correo: </label>
                <input type={'email'}  onBlur={searchPrevAgent}
                required id='agentEmail' value={email} onChange={(evt)=> setEmail(evt.target.value)}/>
            </div>
            <div>
                <label htmlFor='agentName' >Nombre: </label>
                <input type={'text'} required id='agentName' value={name} onChange={(evt)=> setName(evt.target.value)} />
            </div>
            <div>
                <label htmlFor='agentAddress' >Direccion: </label>
                <input type={'text'} required id='agentAddress'  value={address} onChange={(evt)=> setAddress(evt.target.value)}/>
            </div>
            <div className={className.inputNumberContainer}>
                <label htmlFor='agentNumber' >Telefono: </label>
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

export  default Agent;