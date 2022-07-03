import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Client from './Client';
import 'react-phone-input-2/lib/style.css';
import Agent from './Agent'
const Reports = () => (
  <Tabs>
    <TabList>
      <Tab>Cliente</Tab>
      <Tab>Agente</Tab>
    </TabList>
    <TabPanel>
      <Client />
    </TabPanel>
    <TabPanel>
      <Agent />
    </TabPanel>
  </Tabs>
);

export default Reports;