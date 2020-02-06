import React, { useState, useEffect } from 'react'
import api from '../../services/api'

function DevForm( { afterSubmit, darkMode } )
{
    var [ github_user, setGitHubUser ] = useState( '' );
    var [ techs, setTechs ] = useState( '' );
    var [ latitude, setLatitude ] = useState( '' );
    var [ longitude, setLongitude ] = useState( '' );

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
        const resp = await api.post( '/devs', {
            github_user,
            techs,
            latitude,
            longitude,
        } )

        console.log( `response from server is ${ resp.data }` )

        github_user = '';
        techs = '';
        afterSubmit()
    }

    return (
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
    )
}

export default DevForm