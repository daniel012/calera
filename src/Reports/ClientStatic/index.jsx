import * as React from 'react';
import { basicErrorToast, basicSuccessMessage, url } from '../../utils';
import axios from 'axios';
import {getClientAgent}from './indexClassName';

const ClientStatic = () => {
    const [wait, setWait] = React.useState(false);
    const [client, setClient] = React.useState('');
    const className = getClientAgent();
    const searchStaticClient = () => {
        setWait(true);
        axios.get(`${url}/report/staticClient`)
            .then(value => {
                basicSuccessMessage('reporte generado');
            })
            .catch(basicErrorToast)
            .finally(()=>{
                setWait(false);
            });
    }

    return (
    <div className={className.container}>
        <div>
        <label>cliente:</label>&nbsp;&nbsp;
        <input
            type={'text'}
            value={client}
            onChange={(evt)=>{setClient(evt.target.value)}}
         />
         </div>
        <button
            className={className.generateButton}
            onClick={searchStaticClient}
            disabled={wait || !client}
        >
            Generar
        </button>
    </div>
    );
}

export default ClientStatic;