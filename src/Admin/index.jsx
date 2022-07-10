import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Client from './Client';
import Product from './Product';
import 'react-phone-input-2/lib/style.css';
import Agent from './Agent'
const Reports = () => (
  <Tabs>
    <TabList>
      <Tab>Cliente</Tab>
      <Tab>Agente</Tab>
      <Tab>Producto</Tab>
    </TabList>
    <TabPanel>
      <Client />
    </TabPanel>
    <TabPanel>
      <Agent />
    </TabPanel>
    <TabPanel>
      <Product />
    </TabPanel>
  </Tabs>
);

export default Reports;