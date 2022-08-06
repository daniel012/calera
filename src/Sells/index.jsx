import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SearchSell from './SearchSell';
import CreateSell from './CreateSell';

const Sells = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [sell, setSell] = React.useState(undefined);
  return ( 
  <Tabs
    selectedIndex={selectedTab}
    onSelect={setSelectedTab}
  >
    <TabList>
      <Tab>Registrar Venta</Tab>
      <Tab>Buscar Venta</Tab>
    </TabList>

    <TabPanel>
      <CreateSell onCompleteCallBack={(sell)=> { setSell(sell);  setSelectedTab(1);}} onOpenTab={()=> setSell(undefined)}/>
    </TabPanel>
    <TabPanel>
      <SearchSell sell={sell} />
    </TabPanel>
  </Tabs>
)};

export default Sells;