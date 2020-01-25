// Axios para chamadas as API's externas
const axios = require( 'axios' );

// index, show, store, update , destroy

// Importa o model do dev
const Dev = require( '../models/dev' );

// DRY
const ParseStringToArray = require( '../utils/parseStringToArray' )


module.exports = {
    async index_GetAllUsers( req, res )
    {
        // Pega todos os devs dentro do banco de dados 
        const devs = await Dev.find();
        return res.json( devs );
    },
    async store_CreateDev( req, res )
    {
        const { github_user, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne( { github_user } );

        if ( !dev )
        {
            github_api_res = await axios.default.get( `https://api.github.com/users/${ github_user }` );

            const { name, login, avatar_url, bio } = github_api_res.data;

            // Não funciona o 'name = login' pois o valor não é undefined e sim null 
            const name_login = ( !name ) ? login : name;

            //Location 
            const location = {
                type: 'Point',
                coordinates: [ longitude, latitude ],
            };

            techArray = ParseStringToArray.Techs( techs )

            dev = await Dev.create(
                {
                    // se o nome é diferent do JSON original é necessário passar para variavel 
                    name: name_login,
                    // se for igual é so passar (Short Sintax)
                    github_user,
                    bio,
                    avatar_url,
                    techs: techArray,
                    location,
                }
            );

        }
        return res.json( dev )
    },

    async update_ChangeDev( req, res )
    {
        const { github_user, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne( { github_user } );

        if ( dev )
        {
            github_api_res = await axios.default.get( `https://api.github.com/users/${ github_user }` );

            const { name, login, avatar_url, bio } = github_api_res.data;

            // Não funciona o 'name = login' pois o valor não é undefined e sim null 
            const name_login = ( !name ) ? login : name;

            //Location 
            const location = {
                type: 'Point',
                coordinates: [ longitude, latitude ],
            };

            techArray = ParseStringToArray.Techs( techs )

            dev = await Dev.update(
                {
                    // se o nome é diferent do JSON original é necessário passar para variavel 
                    name: name_login,
                    // se for igual é so passar (Short Sintax)
                    github_user,
                    bio,
                    avatar_url,
                    techs: techArray,
                    location,
                }
            );
        }

        dev = await Dev.findOne( { github_user } );

        return res.json( dev )
    },

    async destroy_DeleteUser( req, res )
    {
        const { github_user } = req.body;

        const dev = await Dev.remove(
            {
                github_user
            }
        )

        res.json( dev )
    }
};