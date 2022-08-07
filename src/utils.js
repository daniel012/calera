import { toast } from 'react-toastify';

export const url = 'http://localhost:5000';

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

export const basicWarningMessage = ( msj, internalMessage = undefined) => {
    toast(msj,{
        position: 'top-center',
        type: 'warning',
        theme: 'colored',
        closeOnClick: true,
        hideProgressBar: true
    });
    if(internalMessage) {
        console.log(internalMessage)
    }
}

export const basicSuccessMessage = ( msj) => {
    toast(msj,{
        position: 'top-center',
        type: 'success',
        theme: 'colored',
        closeOnClick: true,
        hideProgressBar: true
    });
}

export const isInputDateFuture = (date) => {
    const today = new Date(); 
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    newDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    return newDate > today;
} 