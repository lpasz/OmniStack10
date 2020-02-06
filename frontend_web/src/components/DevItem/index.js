import React from 'react'

function DevItem( { dev, darkMode } )
{
    return (
        <li id={dev.github_user} className={`dev-item ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
            <header>
                <img src={dev.avatar_url} alt={dev.github_user} />
                <div className={`userInfo ${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                    <strong className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                        {dev.name}
                    </strong>
                    <span className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`}>
                        {dev.techs.join( ", " )}
                    </span>
                </div>
            </header>
            <p >{dev.bio}</p>
            <a className={`${ ( darkMode ) ? "darkMode" : "lightMode" }`} href={`https://github.com/${ dev.github_user }`}> Click here to see my Profile</a>
        </li>)
}

export default DevItem