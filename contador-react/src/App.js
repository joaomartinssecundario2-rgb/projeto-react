import { useState } from 'react';


function App() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1> Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(contador - 1)}>Diminuir</button>
      <button onClick={() => setContador(0)}>🔄 Zerar</button>
    </div>
  );
}

export default App;
