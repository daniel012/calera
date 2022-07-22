import * as React from 'react';
import { addPaymentStyles } from'../indexClassName';
import { url, basicErrorToast,basicWarningMessage, basicSuccessMessage } from '../../utils';
import axios from 'axios';

const NewPayment = (props) => {
    const className = addPaymentStyles();
    const [newPayment, setNewPayment] = React.useState(0);
    const addNewPayment = (evt) => {
        evt.preventDefault();
        const payment = Number(newPayment); 
        
        axios.post(`${url}/payment`,{
            idSell: props.sell.id,
            payment
        })
            .then(value => {
                if(value.status === 200){
                    basicSuccessMessage('se ha agregado el pago');
                    const tempSell = {...props.sell, payment: parseFloat(props.sell.payment) + parseFloat(newPayment)};
                    if(!tempSell.paymentHistory) {
                        tempSell.paymentHistory = [];
                    }
                    tempSell.paymentHistory.push(value.data);
                    props.setSell(tempSell);
                    setNewPayment(0);
                } else if(value.status === 204) {
                    basicWarningMessage('la venta no se ha encontrado')
                }
            })
            .catch((error) => basicErrorToast(error));
    
    }
    if(props.liquidated) {
        return(<b>Liquidada</b>)
    }

    return(
        <form onSubmit={addNewPayment} className={className.form}>
            <label htmlFor='addPayment'>Agregar pago:</label>
            <input 
                id="addPayment"
                type={'number'}
                min={0.1}
                step={0.1}
                value={newPayment}
                onChange={(evt)=> setNewPayment(evt.target.value)}
                required
            />
            <button type='submit' disabled={!newPayment} >Agregar</button>
        </form>
    );
};

export default NewPayment; 