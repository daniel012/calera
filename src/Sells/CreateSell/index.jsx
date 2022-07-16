import * as React from 'react';
import ListProducts from './ListProducts';
import { CreateSellStyle } from'../indexClassName';
import SearchClient from './searchClient';
import { toast } from 'react-toastify';
import { url, basicErrorToast } from '../../utils';
import axios from 'axios';

const CreateSell = (props) => {
    const [amount, setAmount] = React.useState(0);
    const [product, setProduct] = React.useState('');
    const [list, setList] = React.useState([]);
    const [client, setClient] = React.useState('');
    const [payment, setPayment] = React.useState(0);
    const [delivered, setDelivered] = React.useState(true);
    const [price, setPrice] = React.useState(0);
    const [infoPro, setInfoPro] = React.useState(undefined);
    const [dateSell, setDateSell] = React.useState(undefined);
    const [invoice, setInvoice] = React.useState('');
    const [paymentType, setPaymentType] = React.useState(true);

    
    const timeOut = React.useRef(undefined);

    const submitFrom = (event) => {
        event.preventDefault();
        if(list.filter(ele => ele.code === infoPro.code).length !== 0){
            toast(`Producto ${product}  repetido`,{
                position: 'top-center',
                type: 'warning',
                theme: 'colored',
                closeOnClick: true,
                hideProgressBar: true
            });
        } else if(amount > infoPro.amount) {
            toast(`la canditdad a agregar debe ser menor a la disponible`,{
                position: 'top-center',
                type: 'warning',
                theme: 'colored',
                closeOnClick: true,
                hideProgressBar: true
            });
        }else {
            setList([...list, {
                id: infoPro.id,
                amount: Number(amount), 
                product:infoPro.name,
                newAmount: infoPro.amount - amount,
                code:infoPro.code,
                unitPrice: Number(price), 
                price: Number(Number(price)*Number(amount)).toFixed(2),
                delivered: true,
            }]);
            initState();                    
        }            
    }        
    

    const initState = () => {
        setAmount(0);
        setProduct('');
        setInfoPro(undefined);
        setPrice(0);

    }

    const deleteCallBack = (idx) => {
        const oldList = [...list];
        oldList.splice(idx,1);
        setList(oldList);
    }
    const onComplete = () => {
        let total = 0; 
        for(const ele of list) {
            total += parseFloat(ele.price);
        }
        console.log('list: ', list);
        axios.post(`${url}/sell`,{
            client: client.id,
            dateSell,
            payment, 
            total, 
            list,
            delivered,
            invoice,
            paymentType: paymentType? '1': '0'
        })
            .then((value)=> {
                toast(`se registro la venta`,{
                    position: 'top-center',
                    type: 'success',
                    theme: 'colored',
                    closeOnClick: true,
                    hideProgressBar: true
                })
                props.onCompleteCallBack();
            })
            .catch((error) => {
                if(error.response.status === 409 && error.response.data === 'FACTURA_REPETIDA') {
                    basicErrorToast(error,'Factura repetida');
                } else {
                    basicErrorToast(error)
                }
            });
    }

    const searchProduct = (evt) => {
        const inputValue = evt.target.value;
        setProduct(inputValue);

        if(timeOut.current) {
            clearTimeout(timeOut.current);
            timeOut.current = undefined;
        }

        if(inputValue) {
            timeOut.current = setTimeout(()=> {
                if(timeOut.current) {
                    timeOut.current = undefined;
                }
                axios.get(`${url}/product/${inputValue}`)
                    .then((value)=> {
                        if(value.status !== 204) {
                            setInfoPro(value.data[0]);
                        }else {
                            setInfoPro(undefined);
                        }
                    })
                    .catch((error) => basicErrorToast(error));
                setProduct(inputValue);
            },400);
        } else {
            setInfoPro(undefined);
        }
        
    }
    const className = CreateSellStyle();
    return(
    <div>
        <div className={className.clientAndDate}>
            <SearchClient 
                onSearchClientCallBack={setClient}
                client={client}
            />
            <div>
                <label htmlFor='dateSell'>Fecha de venta: </label>
                <input id='dateSell' type={'date'}  value={dateSell} onChange={(evt)=> setDateSell(evt.target.value)}/>
            </div>
        </div>
        <form onSubmit={submitFrom}>
        <div className={className.containerButton}>
            <div>
                <label htmlFor='product'>Codigo de producto:</label>
                <input id='product' onChange={searchProduct} value={product} />
            </div>
            <div>
                <label>Precio sugerido: </label>
                <input disabled  value={infoPro? infoPro.productPrice:0}/>
                <label>Cantidad disponible: </label>
                <input disabled  value={infoPro ? infoPro.amount:0}/>
            </div>
            <div>
                <label>Precio unitario: </label>
                <input type={'number'} min={1} step={0.1} value={price} onChange={(evt)=> setPrice(evt.target.value)}/>
                <label htmlFor='amount'>Cantidad:</label>
                <input type={'number'} id="amount" min={1} step={0.1} value={amount} onChange={(evt) =>{ setAmount(evt.target.value)}} />
            </div>        
            <button type='submit'disabled={!infoPro || !price || !amount } className={className.buttonAdd} >Agregar</button>
        </div>
        </form>
        <ListProducts list={list} deleteCallBack={deleteCallBack} />
        <div className={className.addPayment}>
            <div>
                <label htmlFor='delivered'>Productos entregados:</label>
                <input
                    type={'checkbox'}
                    id='delivered'
                    checked={delivered}
                    onChange={(evt)=> {console.log(evt); setDelivered(!delivered)}}
                />
            </div>
            <div>
                <label htmlFor='delivered'>Pago en efectivo:</label>
                <input
                    type={'checkbox'}
                    id='delivered'
                    checked={paymentType}
                    onChange={(evt)=> {console.log(evt); setPaymentType(!paymentType)}}
                />
            </div>
            <div>
                <label htmlFor='invoice'>Numero de factura:</label>
                <input
                    type={'text'}
                    id='invoice'
                    value={invoice}
                    onChange={(evt)=> setInvoice(evt.target.value)}
                />
            </div>
            <div>
                <label htmlFor='payment'>Abono a capital:</label>
                <input
                    type={'text'}
                    id='payment'
                    value={payment}
                    onChange={(evt)=> setPayment(evt.target.value)}
                />
            </div>
            <button 
                type='submit'
                disabled={list.length === 0 || !client || !dateSell}
                onClick={onComplete}
            >
                Completar
            </button>
        </div>
        
    </div>
    );
}

export default CreateSell;