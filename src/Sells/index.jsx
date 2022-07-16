import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SearchSell from './SearchSell';
import CreateSell from './CreateSell';

const Sells = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
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
      <CreateSell onCompleteCallBack={()=> setSelectedTab(1)}/>
    </TabPanel>
    <TabPanel>
      <SearchSell />
    </TabPanel>
  </Tabs>
)};

export default Sells;