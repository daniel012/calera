import * as React from 'react';
import ListProducts from './ListProduct';
import Search from './SearchSell';
import NewPayment from './NewPayment';

const SearchSell = () => {
    const [sell, setSell] = React.useState(undefined);
    
    return(
        <>
        <Search onSearchSellCallBack={setSell} sell={sell} />
        <div>
            { !!sell && <>
                <ListProducts list={sell.product} totalDebt={sell.totalDebt} payment={sell.payment}/>
                <NewPayment sell={sell} setSell={setSell} />
            </>}
        </div>
        
        </>
    );
}

export default SearchSell;