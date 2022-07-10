import * as React from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import { clientStyle } from '../indexClassName';
import { url } from '../../utils';
import { toast } from 'react-toastify';

const Agent = () => {
    const [phone, setPhone] = React.useState('52');
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [id, setId] = React.useState('');


    const className = clientStyle(); 
    const showSuccess = (type) => {
        toast(`Agente ${name} ${type === 'insert'? 'creado':'actualizado'}`,{
            position: 'top-center',
            type: 'success',
            theme: 'colored',
            closeOnClick: true,
            hideProgressBar: true
        });

        setName('');
        setEmail('');
        setAddress('');
        setPhone('52');
    
        
    }

    const showError = (type, error) => {
        toast(`No se pudo crear al ${type === 'insert'? 'insertar':'actualizar'} contacta al administrador`,{
            position: 'top-center',
            type: 'error',
            theme: 'colored',
            closeOnClick: true,
            hideProgressBar: true
        });
        console.error(error);
    }

    const submitFrom = (event) => {
        event.preventDefault();        

        if(phone.toString().length !== 12){   
            toast('Numero incorrecto',{
                position: 'top-center',
                type: 'warning',
                theme: 'colored',
                closeOnClick: true,
                hideProgressBar: true
            });
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
        }).catch((error)=>{
            toast(`Error desconocido, contacta al administrador`,{
                position: 'top-center',
                type: 'error',
                theme: 'colored',
                closeOnClick: true,
                hideProgressBar: true
            });
            console.error('error: ', error);
        });
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