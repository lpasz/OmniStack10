import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App()
{

  return (
    <div className="App">
      <aside>
        <strong>Register</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Git Hub User</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">

            <label htmlFor="user_techs">Techs</label>
            <input name="user_techs" id="user_techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className="userInfo">
                <strong>
                  Lucas Paszinski
                </strong>
                <span>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p>
              CTO. Na VASP
            </p>
            <a href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className="userInfo">
                <strong>
                  Lucas Paszinski
                </strong>
                <span>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p>
              CTO. Na VASP
            </p>
            <a href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className="userInfo">
                <strong>
                  Lucas Paszinski
                </strong>
                <span>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p>
              CTO. Na VASP
            </p>
            <a href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className="userInfo">
                <strong>
                  Lucas Paszinski
                </strong>
                <span>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p>
              CTO. Na VASP
            </p>
            <a href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className="userInfo">
                <strong>
                  Lucas Paszinski
                </strong>
                <span>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p>
              CTO. Na VASP
            </p>
            <a href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" alt="LucasPaszinski" />
              <div className="userInfo">
                <strong>
                  Lucas Paszinski
                </strong>
                <span>
                  ReactJs, C#, Python
                </span>
              </div>
            </header>
            <p>
              CTO. Na VASP
            </p>
            <a href="https://github.com/LucasPaszinski"> Click here to see my Profile</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
