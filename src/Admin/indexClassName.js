import {createUseStyles} from 'react-jss'

export const clientStyle =  createUseStyles({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        paddingLeft: '50px',
        paddingTop: '20px',
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
