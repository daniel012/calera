import * as React from 'react';
import { tableStyles } from'../indexClassName';

const ListProducts = (props) => {
 const className = tableStyles();
 if (!props.list || props.list.length === 0) {
    return <></>
 }
 const elements = props.list;
 return(
    <div className={className.wrap}>
        <table className={className.principal}>
            <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
            </tr>
            {elements.map(( {amount, product},index ) => {
                return (<tr>
                    <td>{product}</td>
                    <td>{amount}</td>
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
 )   
}

export default ListProducts;