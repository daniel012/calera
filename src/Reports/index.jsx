import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DebitBalance from './DebitBalance';
import Sells from './Sells';
import Catalog from './Catalog';
import ClientStatic from './ClientStatic';

const Reports = () => (
  <Tabs>
    <TabList>
      <Tab>Saldo Deudor</Tab>
      <Tab>Cierre de Venta</Tab>
      <Tab>Estadistica Cliente</Tab>
      <Tab>Otros reportes</Tab>
    </TabList>

    <TabPanel>
      <DebitBalance />
    </TabPanel>
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