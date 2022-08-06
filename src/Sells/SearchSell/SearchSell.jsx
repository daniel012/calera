import * as React from 'react';
import { SearchSellStyle } from'../indexClassName';

const SearchSell =( props) => {
    const className = SearchSellStyle();

    if(!!props.idSell){
        return (
        <div className={className.displayClient}> 
            <label>Venta ID: {props.idSell}</label>
            <img alt='delete client' src="/delete.svg" onClick={props.deleteSell}></img>
        </div>
        );
    }
    
    const onSubmit = async (evt) => {
        evt.preventDefault();
        const idVenta = evt.target[0].value;
        await props.onSearchCallBack(idVenta);
    }
    
    return(
        <form onSubmit={onSubmit}>
            <div className={className.containerButton}>
                <label htmlFor='searchVenta'>Venta ID:</label>
                <input type={'text'} id='searchVenta' required />
                <button type='submit'>Buscar</button>
            </div>
        </form>
    );
};

export default SearchSell;