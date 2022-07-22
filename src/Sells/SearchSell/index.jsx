import * as React from 'react';
import ListProducts from './ListProduct';
import Search from './SearchSell';
import NewPayment from './NewPayment';
import { sellViewContainer } from '../indexClassName';

const SearchSell = (props) => {
    const [sell, setSell] = React.useState(undefined);
    const className = sellViewContainer();
    React.useEffect(()=>{
        if(props.sell){
            setSell(props.sell);
        }
    },[]);

    const liquidated = !!sell && sell.payment === sell.total;
    return(
        <>
        <Search onSearchSellCallBack={setSell} sell={sell} />
        
            { !!sell && <div className={className.container}>
                <label>Client: <b>{sell.client}</b></label>
                <label>Agente: <b>{sell.agent}</b></label> 
                <ListProducts list={sell.list} totalDebt={sell.total} payment={sell.payment} liquidated={liquidated}/>
                <label>Factura: <b>{sell.invoice}</b></label>
                <NewPayment sell={sell} setSell={setSell} liquidated={liquidated} />
            </div>}
        
        </>
    );
}

export default SearchSell;