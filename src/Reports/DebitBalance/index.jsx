import * as React from 'react';
import { getPrincipal } from './indexClassName';

const DebitBalance = () => {
const [filter, setFilter] = React.useState(false);
const className = getPrincipal(filter);
return (
<div className={className.container}>
  <div>
    <label htmlFor='searchClient'>Buscar por cliente:</label>
    <input type={'checkbox'} id='searchClient' checked={filter} onChange={()=> setFilter(!filter)} />
  </div>
  <div className={className.Client} style={{display:filter?'block':'none'}}>
    <label htmlFor='nameClient' >Cliente:</label>
    <input type={'text'} id='nameClient' />
  </div>
  <div>
    <button className={className.generateButton}>Generar</button>
  </div>
</div>
);

}

export default DebitBalance;