import * as React from 'react';
import { toast } from 'react-toastify';
import { url } from '../../utils';
import axios from 'axios';


import { CreateSellStyle } from'../indexClassName';


const SearchClient =( props) => {
    const className = CreateSellStyle();
    const delteClient = () => props.onSearchClientCallBack('');

    if(!!props.client){
        return (
        <div className={className.displayClient}> 
            <label>Cliente: {props.client.correo}</label>
            <img alt='delete client' src="/delete.svg" onClick={delteClient}></img>
        </div>
        );
    }
    
    const onSearch = (evt) => {
        evt.preventDefault();
        if(evt.target[0].value){
            axios.get(`${url}/client/${evt.target[0].value}`)
                .then((value)=> {
                    if(value.status === 200){
                        props.onSearchClientCallBack(value.data[0]);
                    } else if( value.status === 204) {
                        toast(`cliente ${evt.target[0].value} no se encuentra`,{
                            position: 'top-center',
                            type: 'warning',
                            theme: 'colored',
                            closeOnClick: true,
                            hideProgressBar: true
                        });
                    }
                })
                .catch((error)=>{
                    toast(`contacta al administrador`,{
                        position: 'top-center',
                        type: 'error',
                        theme: 'colored',
                        closeOnClick: true,
                        hideProgressBar: true
                    });
                    console.error(error);
                });
        }
    } 
    return(
        <form onSubmit={onSearch}>
            <div className={className.containerButton}>
                <label htmlFor='searchClient'>Cliente:</label>
                <input type={'email'} id='searchClient' required />
                <button type='submit'>Buscar</button>
            </div>
        </form>
    );
};

export default SearchClient;