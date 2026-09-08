import { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="page">
      <div className="counter-card">
        <p className="counter-label">Contador</p>
        <h1 className="counter-display">{contador}</h1>
        <div className="button-row">
          <button className="btn btn-decrease" onClick={() => setContador(contador - 1)}>
            − Diminuir
          </button>
          <button className="btn btn-reset" onClick={() => setContador(0)}>
            Zerar
          </button>
          <button className="btn btn-increase" onClick={() => setContador(contador + 1)}>
            + Aumentar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
