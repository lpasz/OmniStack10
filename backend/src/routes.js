// Importa somente as rotas do express
const { Router } = require( 'express' );
// Controi as rotas
const routes = Router()
// Axios para chamadas as API's externas
const axios = require('axios')

// Cuidado a arrow function precisa ser async 
routes.post( '/devs', async ( req, res ) =>
{
    const { github_user, techs } = req.body;
    
    github_api_res = await axios.default.get( `https://api.github.com/users/${ github_user }` );

    console.log( github_api_res.data ) 
    // Não funciona o 'name = login' pois o valor não é undefined e sim null
    const { name, login , avatar_url, url, bio } = github_api_res.data;
    
    const name_login = (!name) ? login : name;

    console.log(name_login, avatar_url, url, bio, String(techs).split(','));
    res.json( { name_login, avatar_url, url, bio } )
    
}
);

module.exports = routes;