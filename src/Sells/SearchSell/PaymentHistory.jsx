import * as React from 'react';

const PaymentHistory = ({history, paymentReport, idVenta}) => {

    if(history.length === 0) {
        return <></>
    }

    return(
        <div className='paymentHistory'>
            <label><b>Historial de pago</b></label>
            <table >
                <tr>
                    <th>Monto</th>
                    <th>Fecha</th>
                    <th>Tipo de pago</th>
                </tr>
                
                    {history.map(({date, amount, paymentType}) => 
                        (<tr>
                            <td>{amount}</td>
                            <td>{date}</td>
                            <td>{ paymentType && paymentType.toLowerCase() === 'true' ?'Efectivo':'Credito'}</td>
                        </tr>)
                    )}
                
            </table>
        </div>
    )

}


export default PaymentHistory;
