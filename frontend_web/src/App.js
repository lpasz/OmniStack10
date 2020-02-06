import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './/services//api';
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

function App()
{
  var [ darkMode, setDarkMode ] = useState( true );
  setDarkMode( true )
  
  var [ devs, setDevs ] = useState( [] );

  async function loadDevs()
  {
    const resp = await api.get( 'devs' )
    setDevs( resp.data );
  }

  useEffect( () =>
  {
    loadDevs()
  }, [] );

  useEffect( () =>
  {
    document.body.classList.value = '';
    document.body.classList.add( `${ ( darkMode ) ? "darkMode" : "lightMode" }` );
  }, [ darkMode ] )

  return (
    <div className="App">
      <aside className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
        <strong className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>Register</strong>
        <DevForm afterSubmit={loadDevs} darkMode={darkMode} />
      </aside>
      <main>
        <ul>
          {devs.map( dev => (
            <DevItem key={dev.__id} dev={dev} darkMode={darkMode} />
          ) )}
        </ul>
      </main>
    </div>
  )
}

export default App;
