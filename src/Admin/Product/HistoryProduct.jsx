import * as React from 'react';
import axios from 'axios';
import { clientStyle } from '../indexClassName';
import { basicErrorToast, basicSuccessMessage, basicWarningMessage, isInputDateFuture,url } from '../../utils';

const HistoryProduct = (props) => {

    const [history, setHistory] = React.useState([]);
    
    React.useEffect(()=>{
        axios.get(`${url}/productHistory/${props.idProduct}`)
            .then((value)=> {
                setHistory(value.data)
            })
            .catch(error => basicErrorToast(error));
    },[]);
    
    if(history.length === 0) {
        return <></>
    }
    return(
        <div>
            <table >
                <tr>
                    <th>tipo</th>
                    <th>fecha</th>
                    <th>cantidad</th>
                    <th>id de venta</th>
                </tr>
                
                    {history.map(({date, amount, type, idSell}) => 
                        (<tr>
                            <td>{type}</td>
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