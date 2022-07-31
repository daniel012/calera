import {createUseStyles} from 'react-jss'

export const getPrincipal = createUseStyles({
    '@keyframes appear': {
        '0%': {
            opacity: 0
        },
        '25%': {
            opacity: 0
        },
        '50%': {
            opacity: 0
        },
        '75%': {
            opacity: 1
        },
        '100%': {
            opacity: 1
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        '& div:first-child':{
            margin: '5px 0px'
        }
    },
    Client:{
        animationName: '$appear', 
        animationDelay: '-0.2s',
        animationDuration: '1s',
        animationIterationCount: '1',
        '& label': {
            marginRight: '10px'
        },
        '& input':{
            width: '194px',
            border: '1px solid #CACACA',
            borderRadius: '5px',
            height: '31px',
            paddingLeft: '10px'
        }
    },
    generateButton:{
        padding: '5px',
        margin: '10px 0'
    }
});

