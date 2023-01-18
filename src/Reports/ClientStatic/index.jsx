import * as React from 'react';
import { basicErrorToast, basicSuccessMessage, basicWarningMessage, url } from '../../utils';
import axios from 'axios';
import {getClientAgent}from './indexClassName';
import SearchClient from './searchClient';

const ClientStatic = () => {
    const [wait, setWait] = React.useState(false);
    const [client, setClient] = React.useState('');
    const [clients, setClients] = React.useState(undefined);
    const className = getClientAgent();
    const searchStaticClient = () => {
        setWait(true);
        axios.get(`${url}/client/${client.label}`)
          .then(value=>{
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

    const searchAllClients = async () => {
        try{
            const value = await axios.get(`${url}/client`);
            if(value.status === 204){
                basicWarningMessage('no hay clientes registrados');
                setClients([]);
            } else {
                setClients(value.data.map(ele => ({'id':ele['id'],'label':ele['nombre'],'agente':ele['agente']})));
            }
        } catch(e){
            basicErrorToast(e);
        }
    }
    React.useEffect(()=>{
        searchAllClients();
    },[]);

    return (
    <div className={className.container}>
        <SearchClient 
                onSearchClientCallBack={setClient}
                client={client}
                allClients={clients}
            />
        <div>
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