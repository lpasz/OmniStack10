import React from 'react';
import Header from './Header';
import { useState } from 'react';

// Componente: (Ex: App) Bloco isolado de HTML, CSS JS, o qual não interfere no restante da aplicação
// Propriedade: São os atributos do HTML || Informações que o componente pai passa para o filho
// Estado: informação manipulada por componentes, pois o react não monitora a alteração de varaiveis (Lembrar: imutabilidade)

function App()
{
  const [counter, setCounter] = useState(0)

  function incrementCounter()
  {
    console.log('click')
    setCounter( counter + 1 );
  }

  return (
    // fragment open
    <>
      <Header title="Titulo 01" />
      <Header title="Titulo 02" />
      <Header title="Titulo 03" />
      <h2>Contador: {counter}</h2>
      <button onClick={incrementCounter}>Incrementa Contador</button>
    </>
  );
}

export default App;
