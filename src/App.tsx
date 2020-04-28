import React from 'react';
import './App.css';

import { SwFilm } from './SwFilm';
import Logo from './sw-logo.svg';

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Logo} alt="sw logo"/>
      </div>
      <SwFilm id={1}/>
    </div>
  );
}

export default App;
