import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App()
{
  const [ darkMode, setDarkMode ] = useState( true ); 

  const [ latitude, setLatitude ] = useState( '' );
  const [ longitude, setLongitude ] = useState( '' );

  useEffect( () =>
  {
    document.body.classList.value='';
    document.body.classList.add(`${( darkMode ) ? "darkMode" : "lightMode"}`); 
  },[darkMode])

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

  return (
    <div className="App">
      <aside className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
        <strong className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>Register</strong>
        <form>
          <div className={`input-block  ${( darkMode ) ? "darkMode" : "lightMode"}`}>
            <label className={`${( darkMode ) ? "darkMode" : "lightMode"}`} htmlFor="github_username">Git Hub User</label>
            <input className={`${( darkMode ) ? "darkMode" : "lightMode"}`} name="github_username" id="github_username" required />
          </div>
          <div className={`input-block  ${( darkMode ) ? "darkMode" : "lightMode"}`}>

            <label className={`${( darkMode ) ? "darkMode" : "lightMode"}`} htmlFor="user_techs">Techs</label>
            <input className={`${( darkMode ) ? "darkMode" : "lightMode"}`} name="user_techs" id="user_techs" required />
          </div>
          <div className="input-group">
            <div className={`input-block  ${( darkMode ) ? "darkMode" : "lightMode"}`}>
              <label className={`${( darkMode ) ? "darkMode" : "lightMode"}`} htmlFor="latitude">Latitude</label>
              <input className={`${( darkMode ) ? "darkMode" : "lightMode"}`} name="latitude" id="latitude" required defaultValue={latitude} />
            </div>
            <div className={`input-block  ${( darkMode ) ? "darkMode" : "lightMode"}`}>
              <label className={`${( darkMode ) ? "darkMode" : "lightMode"}`} htmlFor="longitude">Longitude</label>
              <input className={`${( darkMode ) ? "darkMode" : "lightMode"}`} name="longitude" id="longitude" required defaultValue={longitude} />
            </div>
          </div>

          <button type="submit" onClick={() => { setDarkMode( !darkMode ) }}>Submit</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className={`dev-item ${( darkMode ) ? "darkMode" : "lightMode"}`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${( darkMode ) ? "darkMode" : "lightMode"}`}>
                <strong className={`${( darkMode ) ? "darkMode" : "lightMode"}`} className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  Lucas Paszinski
                </strong>
                <span className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p >
              CTO. Na VASP
            </p>
            <a className={`${( darkMode ) ? "darkMode" : "lightMode"}`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className={`dev-item ${( darkMode ) ? "darkMode" : "lightMode"}`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${( darkMode ) ? "darkMode" : "lightMode"}`}>
                <strong className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  Lucas Paszinski
                </strong>
                <span className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p >
              CTO. Na VASP
            </p>
            <a className={`${( darkMode ) ? "darkMode" : "lightMode"}`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className={`dev-item ${( darkMode ) ? "darkMode" : "lightMode"}`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${( darkMode ) ? "darkMode" : "lightMode"}`}>
                <strong className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  Lucas Paszinski
                </strong>
                <span className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p >
              CTO. Na VASP
            </p>
            <a className={`${( darkMode ) ? "darkMode" : "lightMode"}`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className={`dev-item ${( darkMode ) ? "darkMode" : "lightMode"}`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${( darkMode ) ? "darkMode" : "lightMode"}`}>
                <strong className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  Lucas Paszinski
                </strong>
                <span className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p >
              CTO. Na VASP
            </p>
            <a className={`${( darkMode ) ? "darkMode" : "lightMode"}`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className={`dev-item ${( darkMode ) ? "darkMode" : "lightMode"}`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${( darkMode ) ? "darkMode" : "lightMode"}`}>
                <strong className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  Lucas Paszinski
                </strong>
                <span className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p >
              CTO. Na VASP
            </p>
            <a className={`${( darkMode ) ? "darkMode" : "lightMode"}`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className={`dev-item ${( darkMode ) ? "darkMode" : "lightMode"}`}>
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className={`userInfo ${( darkMode ) ? "darkMode" : "lightMode"}`}>
                <strong className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  Lucas Paszinski
                </strong>
                <span className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p className={`${( darkMode ) ? "darkMode" : "lightMode"}`}>
              CTO. Na VASP
            </p>
            <a className={`${( darkMode ) ? "darkMode" : "lightMode"}`} href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
