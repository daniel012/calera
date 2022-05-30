import * as React from 'react';
import {tableStyles} from'../indexClassName';

const ListProducts = (props) => {
 const className = tableStyles();
 
 return(
    <table className={className.principal}>
        <tr>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Eliminar</th>
        </tr>
        <tr>
        <td>Peter</td>
        <td>Griffin</td>
        <td>$100</td>
        </tr>
        <tr>
        <td>Lois</td>
        <td>Griffin</td>
        <td>$150</td>
        </tr>
        <tr>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        </tr>
        <tr>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>$250</td>
        </tr>
        </table>
 )   
}

export default ListProducts;