import * as React from 'react';
import Product from './Product';
import HistoryProduct from './HistoryProduct';
import { mainWrapper } from '../indexClassName';

const ProductTable = () => {
    const [id, setId] = React.useState('');
    const className = mainWrapper();

    return (
        <div className={className.container}>
            <Product id= {id} setIdCallBack={setId}/>
            {id && <HistoryProduct idProduct={id} />}
        </div>
    );
}

export default ProductTable;