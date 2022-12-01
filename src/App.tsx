import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import data from './data.json';

import Compo from './Compo';
import BasicTable from './components/BasicTable';
import GenericTable from './components/GenericTable';


function App() {
  return (
    <div style={{padding: "15px"}}>

    <GenericTable/>
    </div>
  );
}

export default App;
