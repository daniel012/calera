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
                {elements.map(( {amount, product, unitPrice},index ) => {
                    return (
                        <tr>
                            <td>{product}</td>
                            <td>{amount}</td>
                            <td>{unitPrice}</td>
                        </tr>)    
                })}
            </table>
        </div>
        <div className={className.totalPrice}>
            <div>
                <label>Total:  <span>{props.totalDebt}</span></label><br />
                <label>Pagado: <span>{Number(props.payment.toFixed(2))}</span></label><br />
                {props.liquidated ? (<b>Liquidada</b>): (<label>Deudas:  <span>{(Number(props.totalDebt - props.payment).toFixed(2))}</span></label>)}
                <br />
            </div>
        </div>
    </>
 )   
}

export default ListProducts;