import * as React from 'react';
import { SearchSellStyle } from'../indexClassName';


const SearchSell =( props) => {
    const className = SearchSellStyle();
    const delteClient = () => props.onSearchSellCallBack('');

    if(!!props.sell){
        return (
        <div className={className.displayClient}> 
            <label>Venta: {props.sell.id}</label>
            <img alt='delete client' src="/delete.svg" onClick={delteClient}></img>
        </div>
        );
    }
    
    const onSearch = (evt) => {
        evt.preventDefault();
        props.onSearchSellCallBack({
            id:'123',
            client: {
                id: 123, 
                name: 'Joe Dou'
            },
            product: [
                {
                    name: 'pala',
                    amount: 1.3,
                    price: 123
                },
                {
                    name: 'mesa',
                    amount: 1.5,
                    price: 456
                }
            ],
            totalDebt: 456, 
            payment: 10
        })
    } 
    return(
        <form onSubmit={onSearch}>
            <div className={className.containerButton}>
                <label htmlFor='searchVenta'>Venta:</label>
                <input type={'text'} id='searchVenta' required />
                <button type='submit'>Buscar</button>
            </div>
        </form>
    );
};

export default SearchSell;