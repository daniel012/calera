import * as React from 'react';
import { SearchSellStyle } from'../indexClassName';
import NewPayment from './NewPayment';

const ListProducts = (props) => {
 const className = SearchSellStyle();
 const elements = props.list;
 const liquidated = props.payment === props.totalDebt;

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
                {!liquidated && (<label>Deudas:  <span>{(Number(props.totalDebt - props.payment).toFixed(2))}</span></label>)}
            </div>
        </div>
        <NewPayment liquidated={liquidated} addNewPayment={props.addNewPayment}/>
    </>
 )   
}

export default ListProducts;