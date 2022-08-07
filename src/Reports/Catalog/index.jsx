import * as React from 'react';
import { basicErrorToast, basicSuccessMessage, url } from '../../utils';
import axios from 'axios';
import {getClientAgent}from './indexClassName';

const Catalog = () => {
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

    const searchproduct = () => {
        setWait(true);
        axios.get(`${url}/report/product`)
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
            Catalogos de Agentes
        </button>
        <button
            className={className.generateButton}
            onClick={searchproduct}
            disabled={wait}
        >
            Catalogos de Productos
        </button>
    </div>
    );
}

export default Catalog;