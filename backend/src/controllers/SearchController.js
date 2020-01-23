const Dev = require( '../models/dev' )
const ParseStringArray = require('../utils/parseStringToArray')

module.exports = {
    async SearchUsers_index( req, res )
    {
        // Pega os valores de query
        const { techs, latitude, longitude } = req.query
        
        
        // Buscar todos os devs num raio
        
        Dev.find()
        
        // Buscar por Techs
        techArray = ParseStringArray.Techs(techs)
        
         
        return res.json( { techs, latitude, longitude } );
    }
}