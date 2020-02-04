import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './/services//api';

function App()
{
  var [ darkMode, setDarkMode ] = useState( true );
  var [ devs, setDevs ] = useState( [] );
  var [ github_user, setGitHubUser ] = useState( '' );
  var [ techs, setTechs ] = useState( '' );
  var [ latitude, setLatitude ] = useState( '' );
  var [ longitude, setLongitude ] = useState( '' );

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

  useEffect( () =>
  {
    navigator.geolocation.getCurrentPosition(
      ( position ) =>
      {
        const { latitude, longitude } = position.coords
        setLatitude( latitude )
        setLongitude( longitude )
      },
      ( err ) =>
      {
        console.log( err )
      },
      {
        timeout: 30000,
      }
    );
  }, [] )

  async function handleAddUser( e )
  {
    e.preventDefault();
    setDarkMode(!darkMode)
    const resp = await api.post( '/devs', {
      github_user,
      techs,
      latitude,
      longitude,
    } )
    console.log( `response from server is ${ resp.data }` )

    github_user = '';
    techs = '';
    latitude = '';
    longitude = '';
    loadDevs()
  }

  return (
    <div className="App">
      <aside className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
        <strong className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>Register</strong>
        <form onSubmit={handleAddUser}>
          <div className={`input-block  ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
            <label className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}
              htmlFor="github_username">Git Hub User</label>
            <input
              className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}
              name="github_username"
              id="github_username"
              value={github_user}
              onChange={e => setGitHubUser( e.target.value )}
              required />
          </div>
          <div className={`input-block  ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
            <label className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}
              htmlFor="user_techs">Techs</label>
            <input
              className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}
              name="user_techs"
              id="user_techs"
              value={techs}
              onChange={e => setTechs( e.target.value )}
              required />
          </div>
          <div className="input-group">
            <div className={`input-block  ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
              <label className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}
                htmlFor="latitude">Latitude</label>
              <input className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}
                name="latitude"
                id="latitude"
                required
                defaultValue={latitude}
                onChange={e => setLatitude( e.target.value )} />
            </div>
            <div className={`input-block  ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
              <label className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}
                htmlFor="longitude">Longitude</label>
              <input
                className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}
                name="longitude"
                id="longitude"
                required
                defaultValue={longitude}
                onChange={e => setLongitude( e.target.value )} />
            </div>
          </div>
          <button type="submit" onClick={handleAddUser}>
            Submit
          </button>
        </form>
      </aside>
      <main>
        <ul>
          {devs.map( dev => (
            <li id={dev.github_user} className={`dev-item ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
              <header>
                <img src={dev.avatar_url} alt={dev.github_user} />
                <div className={`userInfo ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  <strong className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                    {dev.name}
                  </strong>
                  <span className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                    {dev.techs.join(", ")}
                  </span>
                </div>
              </header>
              <p >
                {dev.bio}
              </p>
              <a className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`} href={`https://github.com/${ dev.github_user }`}> Click here to see my Profile</a>
            </li>
          ) )}
        </ul>
      </main>
    </div>
  );
}

export default App;
