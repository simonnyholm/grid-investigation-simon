import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import Compo from './Compo';
import TableDemo from './TableDemo';


function App() {
  return (
    <Container>
      <TableDemo/>
      { data.map((group) => (
          <Compo name={ group.amount.toString() } />
      ))}
    </Container>
  );
}

export default App;
