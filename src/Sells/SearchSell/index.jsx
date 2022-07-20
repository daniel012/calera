import * as React from 'react';
import ListProducts from './ListProduct';
import Search from './SearchSell';
import NewPayment from './NewPayment';

const SearchSell = (props) => {
    const [sell, setSell] = React.useState(undefined);

    React.useEffect(()=>{
        if(props.sell){
            setSell(props.sell);
        }
    },[]);

    const liquidated = !!sell && sell.payment === sell.total;
    return(
        <>
        <Search onSearchSellCallBack={setSell} sell={sell} />
        <div>
            { !!sell && <>
                <ListProducts list={sell.list} totalDebt={sell.total} payment={sell.payment} liquidated={liquidated}/>
                {!liquidated && <NewPayment sell={sell} setSell={setSell} />}
            </>}
        </div>
        
        </>
    );
}

export default SearchSell;