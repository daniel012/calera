import * as React from 'react';
import { basicErrorToast, basicSuccessMessage, url } from '../../utils';
import axios from 'axios';
import {getClientAgent}from './indexClassName';

const ClientAgent = () => {
    const className = getClientAgent();
    const searchClientAgent = () => {
        axios.get(`${url}`)
            .then(value => {
                basicSuccessMessage('reporte generado');
            })
            .catch(basicErrorToast)
    }

    return (
    <div className={className.container}>
        <button className={className.generateButton} onClick={searchClientAgent}>
            Generar
        </button>
    </div>
    );
}

export default ClientAgent;