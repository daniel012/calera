import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DebitBalance from './DebitBalance';
import Sells from './Sells';
import ClientAgent from './ClientAgent';

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
      <Sells />
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <ClientAgent />
    </TabPanel>
  </Tabs>
);

export default Reports;