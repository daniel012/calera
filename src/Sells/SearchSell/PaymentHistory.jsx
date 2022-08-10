import * as React from 'react';

const PaymentHistory = ({history, paymentReport}) => {
    const [disableReport, setDisableReport] = React.useState(false);

    if(history.length === 0) {
        return <></>
    }
    const onclickReport = async (id) => {
        setDisableReport(true);
        await paymentReport(id);
        setDisableReport(false);
    }
    return(
        <div className='paymentHistory'>
            <label><b>Historial de pago</b></label>
            <table >
                <tr>
                    <th></th>
                    <th>Monto</th>
                    <th>Fecha</th>
                    <th>Tipo de pago</th>
                </tr>
                
                    {history.map(({date, amount, paymentType, id}) => 
                        (<tr>
                            <td>
                                <button
                                    disabled={disableReport}
                                    onClick={()=>onclickReport(id)}
                                >
                                    comprobrante
                                </button>
                            </td>
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
