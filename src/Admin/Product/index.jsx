import * as React from 'react';
import axios from 'axios';
import { clientStyle } from '../indexClassName';
import { basicErrorToast, basicSuccessMessage, url } from '../../utils';

const Product = () => {
    const [code, setCode] = React.useState('');
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const prevAmount = React.useRef(0);
    const [id, setId] = React.useState('');
    const [dateChange, setDateChange] = React.useState(new Date());
    const [productPrice, setProductPrice] = React.useState(0);



    const className = clientStyle(); 
    const showSuccess = (type) => {
        basicSuccessMessage(`Producto ${name} ${type === 'insert'? 'creado':'actualizado'}`);
        setCode('');
        setName('');
        setDescription('');
        setAmount(0);  
        setId('');
        setDateChange(new Date());
        setProductPrice(0);
        prevAmount.current = 0;
    }

    const showError = (type, error) => basicErrorToast(
        error, 
        `No se pudo crear al ${type === 'insert'? 'insertar':'actualizar'} contacta al administrador`
        ); 

    

    const submitFrom = (event) => {
        event.preventDefault();        
        
        const payload = {
            code,
            name,
            description, 
            amount,
            productPrice,
            'real_amount': amount
        }
        if( !id ) {
            axios.post(`${url}/product`,{
                 ...payload,
                'fecha': dateChange,
                })
                .then(()=> showSuccess('insert'))
                .catch((e)=> showError('insert', e));
        } else {
            let isOk = true;
            let changePayload = {};
            
            if(prevAmount.current !== amount){
                // eslint-disable-next-line no-restricted-globals
                isOk= confirm(`Modificando la existencia de ${name}, ¿Continuar?`);
                changePayload = {
                    isIngreso: prevAmount.current > amount?0:1,
                    difference: Math.abs(prevAmount.current - amount),
                    fecha: dateChange,
                }
            }
            
            if(isOk){
                axios.put(`${url}/product/${id}`,{
                    ...payload,
                    fecha: null,
                    ...changePayload
                    })
                    .then(()=> showSuccess('put'))
                    .catch((e)=> showError('put', e));
            }
        }
        
    } 

    const searchPrevProduct = (evt) => {
        if(evt.target.value) {
            axios.get(`${url}/product/${evt.target.value}`)
            .then((value)=>{
                if(value.status === 200 ) {
                    setCode(value.data[0].code);
                    setName(value.data[0].name);
                    setDescription(value.data[0].description);
                    setAmount(value.data[0].amount);
                    setId(value.data[0].id);
                    setProductPrice(value.data[0].productPrice);
                    prevAmount.current = value.data[0].amount;
                } else {
                    setId('');
                }
            }).catch((error)=> basicErrorToast(error));
        }
    }

    return(
        <form  onSubmit={submitFrom} className={className.container}>
            <div>
                <label htmlFor='code' >Codigo: </label>
                <input type={'string'}  onBlur={searchPrevProduct}
                required value={code} onChange={(evt)=> setCode(evt.target.value)}/>
            </div>
            <div>
                <label htmlFor='productName' >Nombre: </label>
                <input type={'string'} 
                required value={name} onChange={(evt)=> setName(evt.target.value)}/>
            </div>
            <div>
                <label htmlFor='productDescription' >Descripcion: </label>
                <input type={'text'} required id='productDescription' value={description} onChange={(evt)=> setDescription(evt.target.value)} />
            </div>
            <div>
                <label htmlFor='productAmount' >Existencia: </label>
                <input type={'number'} required id='productAmount' min={0}  value={amount} onChange={(evt)=> setAmount(evt.target.value)}/>
            </div>
            <div>
                <label htmlFor='productPrice' >Precio sugerido de venta: </label>
                <input type={'number'} required id='productPrice' step={0.1} min={0}  value={productPrice} onChange={(evt)=> setProductPrice(evt.target.value)}/>
            </div>
            <div>
                <label htmlFor='dateChange' >Fecha de modificacion: </label>
                <input type={'date'} required={prevAmount.current !== amount} id='dateChange' min={0}  value={dateChange} onChange={(evt)=> setDateChange(evt.target.value)}/>
            </div>
            <button>{id?'Editar':'Agregar'}</button>
        </form>
    )
}

export  default Product;