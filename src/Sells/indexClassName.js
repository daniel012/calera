import {createUseStyles} from 'react-jss'

export const CreateSellStyle =  createUseStyles({
    containerButton:{
        display: 'flex',
        marginLeft: '40px',
        marginTop: '20px',
        '& input': {
            margin: '0px 10px',
        }
    },
    wrap:{
        maxWidth: '1000px',
        padding: '20px 40px',
        maxHeight: '300px',
        overflowY: 'scroll'
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
        marginTop: '10px',
        fontWeight: 'bold'
    },
    icon: {
        cursor: 'pointer',
    },
    completeButton: {
        margin: '10px 0',
    },
    displayClient: {
        display: 'flex',
        paddingLeft: '40px',
        paddingTop: '10px',
        '& img':{
            paddingLeft: '14px',
        }
    },
});