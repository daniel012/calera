import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sells from './Sells';
import Catalog from './Catalog';
import ClientStatic from './ClientStatic';

const Reports = () => (
  <Tabs>
    <TabList>
      <Tab>Cierre de Venta</Tab>
      <Tab>Estadistica Cliente</Tab>
      <Tab>Otros reportes</Tab>
    </TabList>

    <TabPanel>
      <Sells />
    </TabPanel>
    <TabPanel>
      <ClientStatic />
    </TabPanel>
    <TabPanel>
      <Catalog />
    </TabPanel>
  </Tabs>
);

export default Reports;