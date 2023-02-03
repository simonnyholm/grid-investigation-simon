import React from 'react';
import './App.css';
import { COLUMNS } from './components/Columns.jsx'

import dataJson from './data.json'

import GenericTable from './components/GenericTable';

const flatData = dataJson.flatMap((transactionGroup) => transactionGroup.transactions);


function App() {
  return (
    <div style={{padding: "15px"}}>

    <GenericTable data={flatData} columns={COLUMNS} groupBy={['']}/>
    </div>
  );
}

export default App;
