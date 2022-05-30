import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DebitBalance from './DebitBalance';

const Reports = () => (
  <Tabs>
    <TabList>
      <Tab>Saldo Deudor</Tab>
      <Tab>Cierre de Venta</Tab>
      <Tab>Estadistica Cliente</Tab>
      <Tab>Catalogo agente venta</Tab>
    </TabList>

    <TabPanel>
      <DebitBalance />
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
  </Tabs>
);

export default Reports;