import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import RawTableExample from './RawTableExample';

function App() {
  return (
    <Container>
      <RawTableExample />
      { data.map((group) => (
          <h1 key={group.id}>{ group.amount }</h1>
      ))}
    </Container>
  );
}

export default App;
