const Dev = require( '../models/dev' )
const ParseStringArray = require( '../utils/parseStringToArray' )

module.exports = {
    async SearchUsers_index( req, res )
    {
        // Pega os valores de query
        const { techs, latitude, longitude } = req.query;

        // Buscar por Techs
        techArray = ParseStringArray.Techs( techs )

        // Buscar todos os devs num raio        
        const devs = await Dev.find( {
            location: {
                $near: {                    
                    $geometry: {
                        type: 'Point',
                        coordinates:[longitude,latitude],
                    },
                    $maxDistance: 10000,
                },
            },
            techs: {
                $in: techArray,
            },
        } );

        // Return filtered Devs
        return res.json( devs );
    }
}