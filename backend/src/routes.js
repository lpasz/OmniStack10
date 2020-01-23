// Importa somente as rotas do express
const { Router } = require('express');
// Controi as rotas
const routes = Router()

// Controller de Devs
const DevController = require( './controllers/DevController' )

// Create Dev Route 
routes.post('/devs', DevController.store_CreateDev);
routes.get( '/devs', DevController.index_GetAllUsers );

//  Controller de busca de devs
const SearchController = require( './controllers/SearchController' )
routes.get( '/search', SearchController.SearchUsers_index );

module.exports = routes; 