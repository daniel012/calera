import * as React from 'react';
import { CreateSellStyle } from'../indexClassName';

const ListProducts = (props) => {
 const className = CreateSellStyle();
 if (!props.list || props.list.length === 0) {
    return <></>
 }
 let totalPrice = 0;
 const elements = props.list;
 return(
     <>
    <div className={className.wrap}>
        <table className={className.principal}>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio unitario</th>
                <th>Precio</th>
                <th>Eliminar</th>
            </tr>
            {elements.map(( {amount, product, unitPrice, price},index ) => {
                totalPrice += Number(price);
                return (
                    <tr>
                        <td>{product}</td>
                        <td>{amount}</td>
                        <td>{unitPrice}</td>
                        <td>{price}</td>
                        <td>
                            <img 
                            src="/delete.svg"
                            alt='delte record'
                            className={className.icon}
                            onClick={ ()=> props.deleteCallBack(index)}
                            />
                        </td>
                    </tr>)    
            })}
        </table>
    </div>
    <div className={className.totalPrice}>
        <label>Total:  {totalPrice}</label>
    </div>
    </>
 )   
}

export default ListProducts;