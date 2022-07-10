import * as React from 'react';
import axios from 'axios';
import { clientStyle } from '../indexClassName';
import PhoneInput from 'react-phone-input-2';
import { url } from '../../utils';
import { toast } from 'react-toastify';

const Client = () => {
    const [phone, setPhone] = React.useState('52');
    const [agent, setAgent] = React.useState('');
    const [infoAgent, setInfoAgent] = React.useState('');

    const className = clientStyle(); 
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
            axios.post(`${url}/client`,{            
                "correo": event.target[3].value,
                "correoAgente": infoAgent.email,
                "nombre": event.target[0].value,
                "rfc":event.target[1].value,
                "telefono":phone
            }).then((value)=>{
                event.target.reset();
                setInfoAgent('');
                setAgent('');
                setPhone('52');
                toast(`Usuario ${event.target[0].value} insertado`,{
                    position: 'top-center',
                    type: 'success',
                    theme: 'colored',
                    closeOnClick: true,
                    hideProgressBar: true
                });
            }).catch((error)=> {
                if(error.response.status === 409){
                    toast(`Usuario ${event.target[0].value} ya existe`,{
                        position: 'top-center',
                        type: 'warning',
                        theme: 'colored',
                        closeOnClick: true,
                        hideProgressBar: true
                    });
                }else {
                    toast(`${error.response.status} Error, contacte al administrador`,{
                        position: 'top-center',
                        type: 'error',
                        theme: 'colored',
                        closeOnClick: true,
                        hideProgressBar: true
                    });
                }
                console.error('error: ',error);
            });
        }
    } 
    const searchAgent = () => {
        axios.get(`${url}/agent/${agent}`).then((value)=> {
            if(value.data.length !== 0){
                setInfoAgent(value.data[0]);
            } else {
                toast('Correo no encontrado',{
                    position: 'top-center',
                    type: 'warning',
                    theme: 'colored',
                    closeOnClick: true,
                    hideProgressBar: true
                });
            }
        }).catch((error)=> {
            toast('Error en busqueda de agente',{
                position: 'top-center',
                type: 'warning',
                theme: 'colored',
                closeOnClick: true,
                hideProgressBar: true
            });
            console.error('error: ', error);
        });

    }

    const delteAgent = () => {setInfoAgent(''); setAgent('');}

    return(
        <form  onSubmit={submitFrom} className={className.container}>
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
                    }}>Buscar
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
            <input type={'text'} required id='clientName' />
        </div>
        <div>
            <label htmlFor='clientRFC' >RFC: </label>
            <input type={'text'} required id='clientRFC' />
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
        <div>
            <label htmlFor='clientEmail' >Correo: </label>
            <input type={'email'} required id='clientEmail' />
        </div>
        <button>Agregar</button>
    </form>
    )
}

export  default Client;