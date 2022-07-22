import * as React from 'react';

const PaymentHistory = ({history}) => {
    if(history.length === 0) {
        return <></>
    }
    return(
        <div className='paymentHistory'>
            <label><b>Historial de pago</b></label>
            <table >
                <tr>
                    <th>monto</th>
                    <th>Fecha</th>
                </tr>
                
                    {history.map(({date, amount}) => 
                        (<tr>
                            <td>{amount}</td>
                            <td>{date}</td>
                        </tr>)
                    )}
                
            </table>
        </div>
    )

}


export default PaymentHistory;
