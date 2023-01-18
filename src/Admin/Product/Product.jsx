import * as React from 'react';
import axios from 'axios';
import { clientStyle } from '../indexClassName';
import { basicErrorToast, basicSuccessMessage, basicWarningMessage, isInputDateFuture,url } from '../../utils';

const Product = (props) => {
    const [code, setCode] = React.useState('');
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [metric, setMetric] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const prevAmount = React.useRef(0);
    const [dateChange, setDateChange] = React.useState(new Date());
    const [productPrice, setProductPrice] = React.useState(0);
    const [canEditAmount, setCanEditAmount] = React.useState(true);



    const className = clientStyle(); 
    const showSuccess = (type) => {
        basicSuccessMessage(`Producto ${name} ${type === 'insert'? 'creado':'actualizado'}`);
        setCode('');
        setName('');
        setDescription('');
        setAmount(0);  
        props.setIdCallBack('');
        setDateChange(new Date());
        setProductPrice(0);
        setMetric('');
        setCanEditAmount(true);
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
            'real_amount': amount,
            metric
        }
        if(isInputDateFuture(dateChange)){
            basicWarningMessage('no se puede usar fechas en el futuro');
        } else {
            
            if( !props.id ) {
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
                    axios.put(`${url}/product/${props.id}`,{
                        ...payload,
                        fecha: null,
                        ...changePayload
                        })
                        .then(()=> showSuccess('put'))
                        .catch((e)=> showError('put', e));
                }
            }
        }
    } 

    const searchPrevProduct = (evt) => {
        if(evt.target.value) {
            axios.get(`${url}/product/${evt.target.value}`)
            .then((value)=>{
                if(value.status === 200 ) {
                    setCode(value.data.code);
                    setName(value.data.name);
                    setDescription(value.data.description);
                    setAmount(value.data.amount);
                    props.setIdCallBack(value.data.id);
                    setProductPrice(value.data.productPrice);
                    setMetric(value.data.metric);
                    prevAmount.current = value.data.amount;
                    setCanEditAmount(!value.data.hasSells);
                } else {
                    props.setIdCallBack('');
                    setCanEditAmount(true);
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
                <label htmlFor='productName' >Unidad de medida: </label>
                <input type={'string'} disabled={!canEditAmount}
                required value={metric} onChange={(evt)=> setMetric(evt.target.value)}/>
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
                <input type={'number'} required id='productPrice' step={0.01} min={0}  value={productPrice} onChange={(evt)=> setProductPrice(evt.target.value)}/>
            </div>
            <div>
                <label htmlFor='dateChange' >Fecha de modificacion: </label>
                <input type={'date'} required={prevAmount.current !== amount} id='dateChange' value={dateChange} onChange={(evt)=> setDateChange(evt.target.value)}/>
            </div>
            <button>{props.id?'Editar':'Agregar'}</button>
        </form>
    )
}

export  default Product;