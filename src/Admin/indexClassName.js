import {createUseStyles} from 'react-jss'

export const clientStyle =  createUseStyles({

    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        paddingLeft: '50px',
        paddingTop: '20px',
        '& div ':{
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
    inputNumberContainer: {
        display: 'flex'
    }
});

export const mainWrapper =  createUseStyles({
    container:{
        display: 'flex',
        '& .historyProduct': {
            marginLeft: '70px',
            marginTop: '20px',
            '& table': {
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
        }
    },
});


export const CreateSellStyle =  createUseStyles({
    testingDaniel:{
        padding: '0 !important',
        '& div': {
            padding: '0 !important',
        }
    },
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
        height: '30px',
        '& input': {
            width: '194px',
            border: '1px solid #CACACA',
            borderRadius: '5px',
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
        flexDirection: 'column',
        alignItems: 'baseline',
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
        '& label': {
            width: 'fit-content !important',
        },
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