import * as React from 'react';
import { basicErrorToast, basicSuccessMessage, url } from '../../utils';
import axios from 'axios';
import {getClientAgent}from './indexClassName';

const ClientAgent = () => {
    const [wait, setWait] = React.useState(false);
    const className = getClientAgent();
    const searchClientAgent = () => {
        setWait(true);
        axios.get(`${url}/report/agent`)
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
        <button
            className={className.generateButton}
            onClick={searchClientAgent}
            disabled={wait}
        >
            Generar
        </button>
    </div>
    );
}

export default ClientAgent;