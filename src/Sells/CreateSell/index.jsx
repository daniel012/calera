import * as React from 'react';
import ListProducts from './ListProducts';

const CreateSell = () => {
    const [amount, setAmount] = React.useState(null);
    const [product, setProduct] = React.useState(null);

    const submitFrom = (event) => {
        event.preventDefault();
    }

    return(
    <>
        <form onSubmit={submitFrom}>
        <div>
            <label htmlFor='product'>Producto</label>
            <input id='product' onChange={(evt) => { setProduct(evt.target.value)}} />
            <label htmlFor='amount'>cantidad</label>
            <input type={'number'} id="amount" min={1} step={0.1} onChange={(evt) =>{ setAmount(evt.target.value)}} />
            <button type='submit'disabled={!amount|| !product} >Agregar</button>
        </div>
        </form>
        <ListProducts />
    </>
    );
}

export default CreateSell;