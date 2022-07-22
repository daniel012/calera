import * as React from 'react';
import axios from 'axios';
import { basicErrorToast, url } from '../../utils';

const HistoryProduct = (props) => {

    const [history, setHistory] = React.useState([]);
    React.useEffect(()=>{
        axios.get(`${url}/productHistory/${props.idProduct}`)
            .then((value)=> {
                setHistory(value.data)
            })
            .catch(error => basicErrorToast(error));
    },[props.idProduct]);
    
    if(history.length === 0) {
        return <></>
    }
    return(
        <div className='historyProduct'>
            <table >
                <tr>
                    <th>Tipo</th>
                    <th>Fecha</th>
                    <th>Cantidad</th>
                    <th>ID de venta</th>
                </tr>
                
                    {history.map(({date, amount, type, idSell}) => 
                        (<tr>
                            <td>{type === 1? 'Entrada': 'Salida' }</td>
                            <td>{date}</td>
                            <td>{amount}</td>
                            <td>{idSell}</td>
                        </tr>)
                    )}
                
            </table>
        </div>
    )
}

export default HistoryProduct;