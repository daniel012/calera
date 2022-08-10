import * as React from 'react';
import { basicErrorToast, basicSuccessMessage, url } from '../../utils';
import axios from 'axios';
import {getClientAgent}from './indexClassName';

const Catalog = () => {
    const [wait, setWait] = React.useState(false);
    const className = getClientAgent();

    const generateReport = (service) => {
        setWait(true);
        axios.get(`${url}${service}`)
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
            onClick={()=> generateReport('/report/agent')}
            disabled={wait}
        >
            Catalogos de Agentes
        </button>
        <button
            className={className.generateButton}
            onClick={()=> generateReport('/report/product')}
            disabled={wait}
        >
            Catalogos de Productos
        </button>
        <button
            className={className.generateButton}
            onClick={()=> generateReport('/report/delinquentCustomers')}
            disabled={wait}
        >
            Clientes con saldo deudor
        </button>
    </div>
    );
}

export default Catalog;