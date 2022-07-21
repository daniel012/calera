import * as React from 'react';
import { basicErrorToast, url } from '../utils';
import axios from 'axios';
import { Principal } from './indexClassName';
import LoadingSpinner from '../spinner';

const Inventory = () => {
    const className = Principal();
    const [element, setElement] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    

    React.useEffect(()=>{
        axios.get(`${url}/product`)
        .then((value)=> {
            setElement(value.data);
            setLoading(false);
        })
        .catch(error => basicErrorToast(error));
    },[]);
    
    if(!!element && !loading){
        return(
        <div>
            <table className={className.table}>
                <tr>
                    <th>Codigo</th>
                    <th>Cantidad</th>
                    <th>Nombre</th>
                    <th>Precio sugerido</th>
                </tr>
                {element.map(( {code ,amount, name, productPrice}) => {
                    return (
                        <tr>
                            <td>{code}</td>
                            <td>{amount}</td>
                            <td>{name}</td>
                            <td>{productPrice}</td>
                        </tr>)    
                })}
            </table>
        </div>);
    }
    return(
        <div style={{
            marginTop: '20px',
            marginLeft: '40px'
        }}>
            <LoadingSpinner /> 
        </div>
    );
}

export default Inventory;