import * as React from 'react';
import { basicErrorToast, basicSuccessMessage, basicWarningMessage, url } from '../../utils';
import axios from 'axios';
import {getClientAgent}from './indexClassName';

const ClientStatic = () => {
    const [wait, setWait] = React.useState(false);
    const [client, setClient] = React.useState('');
    const className = getClientAgent();
    const searchStaticClient = () => {
        setWait(true);
        axios.get(`${url}/client/${client}`)
          .then(value=>{
            console.table(value);
            if(value.status === 200){
                axios.get(`${url}/report/staticClient/${value.data[0].id}`)
                .then(value => basicSuccessMessage('reporte generado'))
                .catch(basicErrorToast)
                .finally(()=> setWait(false));
            } else if(value.status === 204) {
                basicWarningMessage('cliente no encontrado');
                setWait(false);
            }
          })
          .catch(err => {
            setWait(false);
            basicErrorToast(err);
        });
        
    }

    return (
    <div className={className.container}>
        <div>
        <label>Correo de cliente:</label>&nbsp;&nbsp;
        <input
            type={'email'}
            value={client}
            onChange={(evt)=>{setClient(evt.target.value)}}
            disabled={wait}
         />
         </div>
        <button
            className={className.generateButton}
            onClick={searchStaticClient}
            disabled={wait || !client}
        >
            {wait? 'Generando reporte':'Generar'}
        </button>
    </div>
    );
}

export default ClientStatic;