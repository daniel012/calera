import * as React from 'react';
import { DateRangePicker } from 'react-date-range';
import { es } from 'react-date-range/src/locale';
import { url,basicSuccessMessage , basicErrorToast } from '../../utils';
import axios from 'axios';
import { getSellReport } from '../../Sells/indexClassName';

const Sells = () => {
const className = getSellReport();
const [state, setState] = React.useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
]);

const onReport = () => {
  const {startDate, endDate} =state[0];
  const endParameter = startDate.getTime() !== endDate.getTime() ?`${endDate.toLocaleDateString('fr-CA',{  year: 'numeric', month: '2-digit', day: '2-digit'})}`:'';
  axios.post(`${url}/report/endSell`,
  {
    startdate: startDate.toLocaleDateString('fr-CA',{  year: 'numeric', month: '2-digit', day: '2-digit'}),
    endate: endParameter
  })
  .then(value => {
    basicSuccessMessage('report generado')
  }).catch(basicErrorToast);
}
return (
<div className={className.container}>
  <label htmlFor='datesRange'>Rango de fecha:</label>
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
  <button  name='reportButton' onClick={onReport}>Generar reporte</button>
</div>
);

}

export default Sells;