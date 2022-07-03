import * as React from 'react';
import axios from 'axios';
import { clientStyle } from '../indexClassName';
import PhoneInput from 'react-phone-input-2';

const Client = () => {
    const [phone, setPhone] = React.useState('52');
    const [agent, setAgent] = React.useState('');
    const [infoAgent, setInfoAgent] = React.useState('');

    const className = clientStyle(); 
    const submitFrom = (event) => {
        event.preventDefault();
        alert('ok');
    } 
    const searchAgent = () => {
        axios.get('http://192.168.0.191:5000/agent/'+agent).then((value)=> {
            if(value.data.length !== 0){
                setInfoAgent(value.data[0]);
            } else {
                alert('correo no encontrado');
            }
        }).catch((error)=> {
            console.log('este es un error: ', error);
        });

    }

    return(
        <form  onSubmit={submitFrom} className={className.container}>
        <div>
            <label htmlFor='clientAgent' >Correo de agente: </label>
            {infoAgent == '' ? (<>
                <input required id='clientAgent' type={'email'} value={agent} onChange={(e)=>setAgent(e.target.value)}/>
                <button onClick={searchAgent} style={{
                    marginLeft: '10px'
                    }}>Buscar
                </button>
            </>):(
                <>
                <label>{infoAgent[4]}</label>
                </>
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
                        console.log('newPhone: ', phone);
                        setPhone(newPhone);
                    }}
                />
        </div>
        <div>
            <label htmlFor='clientEmail' >Correo: </label>
            <input type={'text'} required id='clientEmail' />
        </div>
        <button>Agregar</button>
    </form>
    )
}

export  default Client;