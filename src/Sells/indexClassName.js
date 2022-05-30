import {createUseStyles} from 'react-jss'

export const tableStyles =  createUseStyles({
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
    icon: {
        cursor: 'pointer',
    }
});