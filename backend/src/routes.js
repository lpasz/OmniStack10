// Importa somente as rotas do express
const { Router } = require('express');
// Controi as rotas
const routes = Router()

// Cuidado a arrow function precisa ser async 
const DevController = require('./controllers/DevController')

//Create Dev Route 
routes.post('/devs', DevController.store_CreateDev);
routes.get('/devs', DevController.index_GetAllUsers);

module.exports = routes;