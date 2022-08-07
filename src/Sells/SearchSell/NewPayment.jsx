import * as React from 'react';
import { addPaymentStyles } from'../indexClassName';

const NewPayment = (props) => {
    const className = addPaymentStyles();
    const [newPayment, setNewPayment] = React.useState(0);
    const [paymentType, setPaymentType] = React.useState(true);
    
    if(props.liquidated) {
        return(<b>Liquidada</b>)
    }

    const addPayment =  async (evt) =>{
        evt.preventDefault();

        const status = await props.addNewPayment(newPayment, paymentType);
        if(status === 200) {
            setNewPayment(0);
        }

    }
    return(
        <form onSubmit={addPayment} className={className.form}>
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
            <label htmlFor='paymentType'>Pago Efectivo:</label>
            <input 
                id='paymentType'
                type={'checkbox'}
                checked={paymentType}
                onChange={()=> setPaymentType(!paymentType)}
            /> 

            <button type='submit' disabled={!newPayment} >Agregar</button>
        </form>
    );
};

export default NewPayment; 