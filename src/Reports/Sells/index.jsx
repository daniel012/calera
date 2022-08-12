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

const onReport = () => {
  console.log('guapo: ', state);
}
return (
<div >
  <label htmlFor='datesRange'>Rango de fecha</label>
  <div>
    <DateRangePicker
      id={'datesRange'}
      onChange={item => setState([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
      locale={es}
      />
  </div>
  <button >Generar reporte</button>
</div>
);

}

export default Sells;