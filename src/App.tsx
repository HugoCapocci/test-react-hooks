import React from 'react';
import './App.css';

function App() {

  const [countCall, setCountCall] = React.useState(0);

  return (
    <div className="App">
      <div>
        Nombre d'appels : {countCall}
      </div>
      <div>
        <button onClick={() => setCountCall(countCall + 1)} >
          OK
        </button>
      </div>
    </div>
  );
}

export default App;
