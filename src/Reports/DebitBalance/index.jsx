import * as React from 'react';
import { DateRangePicker } from 'react-date-range';
import { es } from 'react-date-range/src/locale';

const Test = () => {
const [state, setState] = React.useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
]);
return (
<DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={state}
  direction="horizontal"
  locale={es}
/>);

}

export default Test;