import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Body from './components/Body';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="main">
        <Container fixed>
          <Body/>
        </Container>
      </div>
    </div>
  );
}

export default App;
