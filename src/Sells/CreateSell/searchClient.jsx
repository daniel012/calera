import * as React from 'react';
import { CreateSellStyle } from'../indexClassName';


const SearchClient =( props) => {
    const className = CreateSellStyle();
    const delteClient = () => props.onSearchClientCallBack('');

    if(!!props.client){
        return (
        <div className={className.displayClient}> 
            <label>Cliente: {props.client}</label>
            <img alt='delete client' src="/delete.svg" onClick={delteClient}></img>
        </div>
        );
    }
    
    const onSearch = (evt) => {
        evt.preventDefault();
        props.onSearchClientCallBack(evt.target[0].value)
    } 
    return(
        <form onSubmit={onSearch}>
            <div className={className.containerButton}>
                <label htmlFor='searchClient'>Cliente:</label>
                <input type={'text'} id='searchClient' required />
                <button type='submit'>Buscar</button>
            </div>
        </form>
    );
};

export default SearchClient;