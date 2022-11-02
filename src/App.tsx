import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import Compo from './Compo';
import TableDemo from './TableDemo';
import BasicTable from './components/BasicTable';


function App() {
  return (
    <div>
    <Container>
      
     { data.map((group) => (
          <Compo name={ group.amount.toString() } />
      ))}

      
    </Container>
    <BasicTable/>
    </div>
  );
}

export default App;
