import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import RawTableExample from './RawTableExample';
import Compo from './Compo';
import BasicTable from './components/BasicTable';
import GenericTable from './components/GenericTable';


function App() {
  return (
    <div>
    <Container>
      <RawTableExample />
      { data.map((group) => (
          <Compo key={group.id} name={ group.amount.toString() } />
      ))}

      
    </Container>
    
    <GenericTable/>
    </div>
  );
}

export default App;
