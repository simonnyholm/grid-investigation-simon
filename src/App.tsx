import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import RawTableExample, { ReactTable } from './RawTableExample';
import Compo from './Compo';
import BasicTable from './components/BasicTable';

function App() {
  return (
    <div>
    <Container>
      <ReactTable />
      <RawTableExample />
      { data.map((group) => (
          <Compo key={group.id} name={ group.amount.toString() } />
      ))}

      
    </Container>
    <BasicTable/>
    </div>
  );
}

export default App;
