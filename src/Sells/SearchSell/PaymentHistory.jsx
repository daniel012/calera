import * as React from 'react';

const PaymentHistory = ({history, paymentReport, idVenta}) => {
    const [disableReport, setDisableReport] = React.useState(false);

    if(history.length === 0) {
        return <></>
    }
    const onclickReport = async () => {
        setDisableReport(true);
        await paymentReport();
        setDisableReport(false);
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
            <button disabled={disableReport} onClick={onclickReport} > generar reporte</button>
        </div>
    )

}


export default PaymentHistory;
