import { toast } from 'react-toastify';


export const url = 'http://192.168.0.191:5000';


export const basicErrorToast = (error, msj = 'Error: contacta al administrador' ) => {
    toast(msj,{
        position: 'top-center',
        type: 'error',
        theme: 'colored',
        closeOnClick: true,
        hideProgressBar: true
    });
    console.error(error)
}