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
            display: 'inline-flex'
        },
        '& div input':{
            width: '194px',
            border: '1px solid #CACACA',
            borderRadius: '5px',
            height: '31px'
        }
    },
    inputNumberContainer: {
        display: 'flex'
    }
});


