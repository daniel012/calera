import * as React from 'react';
import ListProducts from './ListProduct';
import Search from './SearchSell';
import { sellViewContainer } from '../indexClassName';
import PaymentHistory from './PaymentHistory';
import { url,basicSuccessMessage , basicWarningMessage, basicErrorToast } from '../../utils';
import axios from 'axios';

const SearchSell = (props) => {
    const [sell, setSell] = React.useState(undefined);
    const [disableReport, setDisableReport] = React.useState(false);

    const className = sellViewContainer();
    React.useEffect(()=>{
        if(props.sell){
            setSell(props.sell);
        }
    },[]);


    const onSearchCallBack = async (idVenta) => {
        if(idVenta) {
            try {
                const value =await axios.get(`${url}/sell/${idVenta}`);
                if(value.status !== 204) {
                    setSell(value.data[0]);
                } else {
                    basicWarningMessage('la venta no fue encontrada')
                }

            } catch(error){
                basicErrorToast(error);
            }
        }
    } 

    const updateDeliver = () => {
        sell && axios.put(`${url}/sell/deliver/${sell.id}`).then(value => {
          basicSuccessMessage('venta actualizada');
          setSell({...sell, delivered:'True'});
        }).catch(basicErrorToast);
      }

      const paymentReport = async () =>  await generateReport('/report/payment/');
      
      const sellAckReport = async () =>  await generateReport('/report/sellAck/');
      
      const generateReport = async (report) => {
        try{
            setDisableReport(true);
            await axios.get(`${url}${report}${sell.id}`);
            basicSuccessMessage('comprobrante generado');
        }catch(err) {
            basicErrorToast(err)
        } finally{
            setDisableReport(false);
        }
      }

      const addNewPayment = async (newPayment, paymentType) => {
        const payment = Number(newPayment); 
        
        try{
            const value = await axios.post(`${url}/payment`,{
                idSell: sell.id,
                payment,
                paymentType
            });
            if(value.status === 200) {
                basicSuccessMessage('se ha agregado el pago');
                const tempSell = {...sell, payment: parseFloat(sell.payment) + parseFloat(newPayment)};
                if(!tempSell.paymentHistory) {
                    tempSell.paymentHistory = [];
                }
                tempSell.paymentHistory.push(value.data);
                setSell(tempSell);
            } else if(value.status === 204) {
                basicWarningMessage('la venta no se ha encontrado')
            }
            return value.status;

        }catch(error) {
            if(error.response && error.response.data === "MONTO_INVALIDO"){
                basicErrorToast(error, 'monto invalido');

            } else {
                basicErrorToast(error);
            }
        }
                
    }

    return(
        <>
        <Search idSell={!!sell ? sell.id: undefined} onSearchCallBack={onSearchCallBack} deleteSell={()=>{setSell('')}} />
        
            { !!sell && <div className={className.container}>
                <div className='sellContainer'>
                    <label>Fecha de venta: <b>{sell.date}</b></label> 
                    <label>Cliente: <b>{sell.clientName}</b></label>
                    <label>Agente: <b>{sell.agent}</b></label> 
                    <ListProducts list={sell.list} totalDebt={sell.total} payment={sell.payment} addNewPayment={addNewPayment}/>
                    {sell.invoice ? <label>Factura: <b>{sell.invoice}</b></label>: <label><b>Remision</b></label>}
                    <label><b>{sell.delivered === 'True'? 'Productos entregados': 'Productos no entregados'}</b> </label> 
                    {sell.delivered !== 'True' && <input type={'button'} className={className.paymentReportButton} value={"Productos entregados"} onClick={updateDeliver} />}
                    {sell.paymentHistory && <button disabled={disableReport} onClick={paymentReport} className={className.paymentReportButton} >generar reporte historial de pago</button>}
                    <button disabled={disableReport} onClick={sellAckReport} className={className.paymentReportButton}>Generar comprobante de venta</button>
                </div>
                {sell.paymentHistory && <PaymentHistory history={sell.paymentHistory}  paymentReport={paymentReport} />}

            </div>}
        
        </>
    );
}

export default SearchSell;