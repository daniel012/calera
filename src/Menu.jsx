import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import Reports from './Reports';
import Sells from './Sells';
import Inventory from './Inventory';

const TestTabs = () => (
  <Tabs direction='ltr'>
    <TabList>
      <Tab>Reportes</Tab>
      <Tab>Venta</Tab>
      <Tab>Invetario</Tab>
      <Tab>Administracion</Tab>
    </TabList>

    <TabPanel>
      <Reports />
    </TabPanel>
    <TabPanel>
      <Sells />
    </TabPanel>
    <TabPanel>
      <Inventory />
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
  </Tabs>
);

export default TestTabs;