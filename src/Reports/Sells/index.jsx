import * as React from 'react';
import { DateRangePicker } from 'react-date-range';
import { es } from 'react-date-range/src/locale';

const Sells = () => {
const [state, setState] = React.useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
]);
const [filter, setFilter] = React.useState(false);
return (
<div >
  <div>
    <label htmlFor='searchClient'>Buscar por cliente:</label>
    <input type={'checkbox'} id='searchClient' checked={filter} onChange={()=> setFilter(!filter)} />
  </div>
  <div style={{display:filter?'block':'none'}}>
    <label htmlFor='nameClient' >Cliente:</label>
    <input type={'text'} id='nameClient' />
  </div>
  <div>
    <button >Generar</button>
  </div>
  <div>
    <DateRangePicker
      onChange={item => setState([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
      locale={es}
      />
  </div>
</div>
);

}

export default Sells;