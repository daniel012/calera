import * as React from 'react';
import { SearchSellStyle } from'../indexClassName';

const ListProducts = (props) => {
 const className = SearchSellStyle();
 const elements = props.list;
 return(
    <>
        <div className={className.wrap}>
            <table className={className.principal}>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
                {elements.map(( {amount, name, price},index ) => {
                    return (
                        <tr>
                            <td>{name}</td>
                            <td>{amount}</td>
                            <td>{price}</td>
                        </tr>)    
                })}
            </table>
        </div>
        <div className={className.totalPrice}>
            <div>
                <label>Total:  <span>{props.totalDebt}</span></label><br />
                <label>Pagado: <span>{props.payment}</span></label><br />
                <label>Deuda:  <span>{(props.totalDebt - props.payment)}</span></label><br />
            </div>
        </div>
    </>
 )   
}

export default ListProducts;