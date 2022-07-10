import * as React from 'react';
import axios from 'axios';
import { clientStyle } from '../indexClassName';
import { url } from '../../utils';
import { toast } from 'react-toastify';

const Product = () => {
    const [code, setCode] = React.useState('');
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const prevAmount = React.useRef(0);
    const [id, setId] = React.useState('');
    const [dateChange, setDateChange] = React.useState(new Date());


    const className = clientStyle(); 
    const showSuccess = (type) => {
        toast(`Producto ${name} ${type === 'insert'? 'creado':'actualizado'}`,{
            position: 'top-center',
            type: 'success',
            theme: 'colored',
            closeOnClick: true,
            hideProgressBar: true
        });

        setCode('');
        setName('');
        setDescription('');
        setAmount(0);  
        setId('');
        setDateChange(new Date());
        prevAmount.current = 0;
    }

    const showError = (type, error) => {
        toast(`No se pudo crear al ${type === 'insert'? 'insertar':'actualizar'} contacta al administrador`,{
            position: 'top-center',
            type: 'error',
            theme: 'colored',
            closeOnClick: true,
            hideProgressBar: true
        });
        console.error(error);
    }

    const submitFrom = (event) => {
        event.preventDefault();        
        
    
        if( !id ) {
            axios.post(`${url}/product`,{
                code,
                name,
                description, 
                amount,
                'fecha': dateChange,
                'real_amount': amount
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
                    code,
                    name,
                    description, 
                    amount,
                    'real_amount': amount,
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
                    prevAmount.current = value.data[0].amount;
                } else {
                    setId('');
                }
            }).catch((error)=>{
                toast(`Error desconocido, contacta al administrador`,{
                    position: 'top-center',
                    type: 'error',
                    theme: 'colored',
                    closeOnClick: true,
                    hideProgressBar: true
                });
                console.error('error: ', error);
            });
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
                <label htmlFor='dateChange' >fecha de modificacion: </label>
                <input type={'date'} required={prevAmount.current !== amount} id='dateChange' min={0}  value={dateChange} onChange={(evt)=> setDateChange(evt.target.value)}/>
            </div>
            <button>{id?'Editar':'Agregar'}</button>
        </form>
    )
}

export  default Product;