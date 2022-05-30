import * as React from 'react';
import ListProducts from './ListProducts';
import { tableStyles } from'../indexClassName';


const CreateSell = () => {
    const [amount, setAmount] = React.useState(0);
    const [product, setProduct] = React.useState('');
    const [list, setList] = React.useState([]);
    const submitFrom = (event) => {
        event.preventDefault();
        setList([...list, {
            amount, 
            product
        }]);
        initState();
    }

    const initState = () => {
        setAmount(0);
        setProduct('');
    }

    const deleteCallBack = (idx) => {
        const oldList = [...list];
        oldList.splice(idx,1);
        setList(oldList);
    }
    const className = tableStyles();
    return(
    <>
        <form onSubmit={submitFrom}>
        <div className={className.containerButton}>
            <label htmlFor='product'>Producto:</label>
            <input id='product' onChange={(evt) => { setProduct(evt.target.value)}} value={product} />
            <label htmlFor='amount'>Cantidad:</label>
            <input type={'number'} id="amount" min={1} step={0.1} value={amount} onChange={(evt) =>{ setAmount(evt.target.value)}} />
            <button type='submit'disabled={!amount|| !product} >Agregar</button>
        </div>
        </form>
        <ListProducts list={list} deleteCallBack={deleteCallBack} />
    </>
    );
}

export default CreateSell;