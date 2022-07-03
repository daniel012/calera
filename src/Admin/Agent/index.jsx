import * as React from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import { clientStyle } from '../indexClassName';

const Agent = () => {
    const [phone, setPhone] = React.useState('52');

    const className = clientStyle(); 
    const submitFrom = (event) => {
        event.preventDefault();
        console.log('aqui: ', phone);
        

        if(phone.toString().length !== 12){
            alert('numero incorrecto');
        } else {
            axios.post('http://192.168.0.191:5000/agent',{
                "name": event.target[0].value,
                "address": event.target[1].value,
                "phone": event.target[2].value,
                "email": event.target[3].value
                }).then(()=>{
                    alert('opa');
                    event.target.reset();
                    setPhone('52');
                }).catch((e)=> {
                    alert('ora');
                    console.error(e);
                });
        }
    } 
    return(
        <form  onSubmit={submitFrom} className={className.container}>
            <div>
                <label htmlFor='agentName' >Nombre: </label>
                <input type={'text'} required id='agentName' />
            </div>
            <div>
                <label htmlFor='agentAddress' >Direccion: </label>
                <input type={'text'} required id='agentAddress' />
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
                        console.log('newPhone: ', phone);
                        setPhone(newPhone);
                    }}
                />
            </div>
            <div>
                <label htmlFor='agentEmail' >Correo: </label>
                <input type={'email'} required id='agentEmail' />
            </div>
            <button>Agregar</button>
        </form>
    )
}

export  default Agent;