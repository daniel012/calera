import * as React from 'react';
import Product from './Product';
import HistoryProduct from './HistoryProduct';

const ProductTable = () => {
    const [id, setId] = React.useState('');
    return (
        <div>
            <Product id= {id} setIdCallBack={setId}/>
            {id && <HistoryProduct idProduct={id}/>}
        </div>
    );
}

export default ProductTable;