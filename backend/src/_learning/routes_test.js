const { Routes } = require( 'express' );

const routes = Routes()

//#region Test Request
///////////////////////////////
//
// Hello world  with Express
//
// http://localhost:3333/
routes.get( '/', ( request, response ) =>
{
    // retorna uma resposta em Texto
    //return response.send( 'Eai meu Parceria !' );

    // Retorna uma resposta json
    return response.json( { 'Hello': 'World!' } );
} )


///////////////////////////////////////////////////////////////
// Tipos de parâmetros
// 
// Query Params: request.query (filtros, ordenação, paginação)
//
// http://localhost:3333/user/?hello=world
routes.get( '/user', ( request, response ) =>
{
    console.log( request.query )
    response.json( request.query )
} )

//////////////////////////////////
//
// Route Params: request.params ()
//
// http://localhost:3333/user/1
routes.delete( '/user/:id', ( req, res ) =>
{
    console.log( req.params.id )
    res.send( req.params.id )
} )

/////////////////////////////////////
//
// Request.body
//
routes.post( '/user', ( req, res ) =>
{
    const body = req.body;
    console.log( `Meu nome é ${ body.name } 
    e email é ${body.email }` )
    res.json( req.body )
} )
//#endregion

module.exports = routes;