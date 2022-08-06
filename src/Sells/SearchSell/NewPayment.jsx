import * as React from 'react';
import { addPaymentStyles } from'../indexClassName';

const NewPayment = (props) => {
    const className = addPaymentStyles();
    const [newPayment, setNewPayment] = React.useState(0);
    
    if(props.liquidated) {
        return(<b>Liquidada</b>)
    }

    const addPayment =  async (evt) =>{
        evt.preventDefault();

        const status = await props.addNewPayment(newPayment);
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
            <button type='submit' disabled={!newPayment} >Agregar</button>
        </form>
    );
};

export default NewPayment; 