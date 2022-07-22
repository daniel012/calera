import {createUseStyles} from 'react-jss'

export const CreateSellStyle =  createUseStyles({
    containerButton:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '40px',
        marginTop: '20px',
        '& input': {
            margin: '0px 10px',
            width: '194px',
            border: '1px solid #CACACA',
            borderRadius: '5px',
            height: '31px',
            paddingLeft: '10px'
        },
        '& div':{
            padding: '5px 0',
        },
        '& div label':{
            width: '100px',
            display: 'inline-flex',
            textAlign: 'left'

        },
        '& div input':{
            width: '194px',
            border: '1px solid #CACACA',
            borderRadius: '5px',
            height: '31px',
            paddingLeft: '10px'
        }
    },
    searchClient: {
        display: 'flex',
        marginLeft: '40px',
        marginTop: '20px',
        '& input': {
            margin: '0px 10px',
            width: '194px',
            border: '1px solid #CACACA',
            borderRadius: '5px',
            height: '31px',
            paddingLeft: '10px'
        },
        '& label':{
            paddingRight: '45px'
        }
    },
    wrap:{
        maxWidth: '1000px',
        padding: '20px 40px',
        maxHeight: '300px',
        overflowY: 'auto'
    },
    principal: {
        borderCollapse: 'collapse',
        width: '100%',
        '& th, td': {
        textAlign: 'left',
        padding: '8px',
        },
        '& tr:nth-child(even)': {
        backgroundColor: '#D6EEEE'
        },
    },
    totalPrice:{
        display: 'flex',
        marginTop: '10px',
        marginLeft: '40px',
        fontWeight: 'bold'
    },
    icon: {
        cursor: 'pointer',
    },
    displayClient: {
        display: 'flex',
        width: '382px',
        '& img':{
            paddingLeft: '14px',
        }
    },
    buttonAdd: {
        height: '35px',
        marginTop: '15px',
    },
    addPayment: {
        display: 'flex',
        marginLeft: '40px',
        marginTop: '20px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& div': {
            margin: '10px 0',
        },
        '& div input:not([type="checkbox"])': {
            margin: '0px 10px',
            width: '194px',
            border: '1px solid #CACACA',
            borderRadius: '5px',
            height: '31px',
            paddingLeft: '10px'
        },
        '& button': {
            height: '35px',
        }
    },
    clientAndDate: {
        display: 'flex',
        '& div': {
            marginTop: '20px',
            marginLeft: '41px'
        },
        '& div input': {
            margin: '0px 10px',
            width: '194px',
            border: '1px solid #CACACA',
            borderRadius: '5px',
            height: '31px',
            paddingLeft: '10px'
        },
    }
});

export const SearchSellStyle =  createUseStyles({
    containerButton:{
        display: 'flex',
        marginLeft: '40px',
        marginTop: '20px',
        '& input': {
            margin: '0px 10px',
        }
    },
    displayClient: {
        marginLeft: '40px',
        marginTop: '20px',
        display: 'flex',
        '& img':{
            paddingLeft: '14px',
        }
    },
    wrap:{
        maxWidth: '1000px',
        padding: '10px 0px',
        maxHeight: '300px',
        overflowY: 'auto'
    },
    principal: {
        borderCollapse: 'collapse',
        width: '100%',
        '& th, td': {
        textAlign: 'left',
        padding: '8px',
        },
        '& tr:nth-child(even)': {
        backgroundColor: '#D6EEEE'
        },
    },
    totalPrice:{
        display:'flex',
        marginTop: '10px',
        textAlign:'left',
        '& span':{
            fontWeight: 'bold',
        }
    }
});

export const addPaymentStyles =  createUseStyles({
    form: {
        display: 'flex',
        marginLeft: '40px',
        marginTop: '20px',
        '& input': {
            margin: '0px 10px',
        }
    }
})


export const sellViewContainer =  createUseStyles({
    container: {
        display: 'flex',
        '& .sellContainer': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'self-start',
            marginLeft: '40px',
            '& label': {
                marginTop: '2px',
                marginBottom: '2px',
            },
        },
        '& .paymentHistory':{
            marginLeft: '60px',
            '& table': {
                width: '100%',
                '& th, td': {
                textAlign: 'left',
                padding: '8px',
                },
                '& tr:nth-child(even)': {
                backgroundColor: '#D6EEEE'
                },
            }
        }
    }
})
