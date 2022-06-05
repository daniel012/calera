import * as React from 'react';


const NewPayment = (props) => {
    const [newPayment, setNewPayment] = React.useState(0);
    const addNewPayment = (evt) => {
        evt.preventDefault();
        const newPayment = props.sell.payment + Number(evt.target[0].value);
        props.setSell({...props.sell, payment: newPayment});
        setNewPayment(0);
    }

    return(
        <form onSubmit={addNewPayment}>
            <label htmlFor='addPayment'>Agregar pago:</label>
            <input 
                id="addPayment"
                type={'number'}
                min={1}
                value={newPayment}
                onChange={(evt)=> setNewPayment(evt.target.value)}
                required
            />
            <button type='submit'>Agregar</button>
        </form>
    );
};

export default NewPayment; 