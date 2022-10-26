import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import data from './data.json';

function App() {
  return (
    <Container>
      { data.map((group) => (
          <h1>{ group.amount }</h1>
      ))}
    </Container>
  );
}

export default App;
