import * as React from 'react';
import { getSearchClient } from'./indexClassName';
import { ClientList } from './ClientList'

const SearchClient =( props) => {
    const className = getSearchClient();
    const delteClient = () => props.onSearchClientCallBack('');

    if(!!props.client){
        return (
        <div className={className.displayClient}> 
            <label style={{marginRight:'10px'}}>Cliente:</label>
            <label>{props.client.label}</label>
            <img alt='delete client' src="/delete.svg" onClick={delteClient}></img>
        </div>
        );
    }
    
    return(
            <div className={className.searchClient}>
                <label htmlFor='searchClient'>Cliente:</label>
                <ClientList options={props.allClients}  callback={props.onSearchClientCallBack} />
            </div>
        );
};

export default SearchClient;