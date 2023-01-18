import {createUseStyles} from 'react-jss'

export const getClientAgent = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
    },
    generateButton:{
        padding: '5px',
        margin: '10px 0'
    }
});

export const getSearchClient = createUseStyles({
    displayClient: {
        marginTop: '20px',
        marginLeft: '41px',
        display: 'flex',
        width: '382px',
        '& img':{
            paddingLeft: '14px',
        }
    },
    searchClient: {
        display: 'flex',
        height: '30px',
        marginTop: '20px',
        marginLeft: '41px',
        '& input': {
            width: '194px',
            border: '1px solid #CACACA',
            borderRadius: '5px',
        },
        '& label':{
            paddingRight: '45px'
        }
    },
})

