import * as React from 'react';
//import axios from 'axios';
//import { url } from '../../utils';
// import { toast } from 'react-toastify';

import { Principal } from './indexClassName';

const Inventory = () => {
    const className = Principal();
    const [element, setElement] = React.useState('');
    const onSearch = (evt) => {
        evt.preventDefault();
        setElement({
            product:{
                id: 123, 
                name: 'test'
            },
            history: [
            {
                amount: 123, 
                idSell: 456, 
                date: '04-11-1992'
            },{
                amount: 123, 
                idSell: 456, 
                date: '04-11-1992'
            },{
                amount: 123, 
                idSell: 456, 
                date: '04-11-1992'
            },{
                amount: 123, 
                idSell: 456, 
                date: '04-11-1992'
            },
            
        ]});
    };

    const deleteElement = () => setElement('');

    if(!!element){
        const {product, history} = element;
        return(
        <div>
            <div className={className.displayClient}> 
                <label>Venta: {product.name}</label>
                <img alt='delete client' src="/delete.svg" onClick={deleteElement}></img>
            </div>
            <table className={className.table}>
                <tr>
                    <th>Venta</th>
                    <th>Cantidad</th>
                    <th>Fecha</th>
                </tr>
                {history.map(( {idSell,amount, date}) => {
                    return (
                        <tr>
                            <td>{idSell}</td>
                            <td>{amount}</td>
                            <td>{date}</td>
                        </tr>)    
                })}
            </table>
        </div>);
    }
    return(
        <form onSubmit={onSearch}>
            <div className={className.containerButton}>
                <label htmlFor='searchVenta'>Id Producto:</label>
                <input type={'text'} id='searchVenta' required />
                <button type='submit'>Buscar</button>
            </div>
        </form>     
    );
}

export default Inventory;