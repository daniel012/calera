import * as React from 'react';
import { SearchSellStyle } from'../indexClassName';
import { url, basicWarningMessage, basicErrorToast } from '../../utils';
import axios from 'axios';


const SearchSell =( props) => {
    const className = SearchSellStyle();
    const delteClient = () => props.onSearchSellCallBack('');

    if(!!props.sell){
        return (
        <div className={className.displayClient}> 
            <label>Venta ID: {props.sell.id}</label>
            <img alt='delete client' src="/delete.svg" onClick={delteClient}></img>
        </div>
        );
    }
    
    const onSearch = (evt) => {
        evt.preventDefault();
        const idVenta = evt.target[0].value;
        if(idVenta) {
            axios.get(`${url}/sell/${idVenta}`)
            .then((value)=> {
                if(value.status !== 204) {
                    props.onSearchSellCallBack(value.data[0]);
                } else {
                    basicWarningMessage('la venta no fue encontrada')
                }
            }).catch(error => basicErrorToast(error) );
        }
    } 
    return(
        <form onSubmit={onSearch}>
            <div className={className.containerButton}>
                <label htmlFor='searchVenta'>Venta ID:</label>
                <input type={'text'} id='searchVenta' required />
                <button type='submit'>Buscar</button>
            </div>
        </form>
    );
};

export default SearchSell;