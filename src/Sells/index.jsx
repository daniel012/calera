import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SearchSell from './SearchSell';
import CreateSell from './CreateSell';

const Sells = () => (
  <Tabs >
    <TabList>
      <Tab>Registrar Venta</Tab>
      <Tab>Buscar Venta</Tab>
    </TabList>

    <TabPanel>
      <CreateSell />
    </TabPanel>
    <TabPanel>
      <SearchSell />
    </TabPanel>
  </Tabs>
);

export default Sells;