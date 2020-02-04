import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './/services//api';

function App()
{
  const [ darkMode, setDarkMode ] = useState( true );

  const [ github_user, setGitHubUser ] = useState( '' );
  const [ techs, setTechs ] = useState( '' );
  const [ latitude, setLatitude ] = useState( '' );
  const [ longitude, setLongitude ] = useState( '' );

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
  }, [] )// Vazio pois sovai executar uma vez não tem dependencias

  async function handleAddUser( e )
  {
    e.preventDefault();
    const resp = await api.post( '/devs', {
      github_user,
      techs,
      latitude,
      longitude,
    } )
    console.log(`response from server is ${resp.data}`)
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
          <li className={`dev-item ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                <strong className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`} className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  Lucas Paszinski
                </strong>
                <span className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p >
              CTO. Na VASP
            </p>
            <a className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className={`dev-item ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                <strong className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  Lucas Paszinski
                </strong>
                <span className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p >CTO. Na VASP</p>
            <a className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className={`dev-item ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                <strong className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  Lucas Paszinski
                </strong>
                <span className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p >
              CTO. Na VASP
            </p>
            <a className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className={`dev-item ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                <strong className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  Lucas Paszinski
                </strong>
                <span className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p >
              CTO. Na VASP
            </p>
            <a className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className={`dev-item ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                <strong className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  Lucas Paszinski
                </strong>
                <span className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p >
              CTO. Na VASP
            </p>
            <a className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className={`dev-item ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                <strong className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  Lucas Paszinski
                </strong>
                <span className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
              CTO. Na VASP
            </p>
            <a className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
