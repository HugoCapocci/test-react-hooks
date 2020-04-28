import React from 'react';
import './App.css';

function App() {

  const [countCall, setCountCall] = React.useState(0);

  const incrementCountCall = () => {
    setCountCall(previousCountCall => previousCountCall + 1);
  };

  return (
    <div className="App">
      <div>
        Nombre d'appels : {countCall}
      </div>
      <div>
        <button onClick={incrementCountCall}>
          OK
        </button>
      </div>
    </div>
  );
}

export default App;
