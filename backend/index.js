// Importação do Modulo Express
const express = require( 'express' );

const password = require( './passwords.json' );

// Install Mongoose for MongoDb Connection
const mongoose = require( 'mongoose' );

// Connection string and option for MongoDB Atlas
mongoose.connect( `mongodb+srv://${password.mongoDb.user}:${ password.mongoDb.password }@omnistack10-finq3.mongodb.net/test?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//Constroi o App 
const app = express();

// Now express understands json 
app.use( express.json() );

//#region Test Request 
///////////////////////////////
//
// Hello world  with Express
//
// http://localhost:3333/
app.get( '/', ( request, response ) =>
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
app.get( '/user', ( request, response ) =>
{
    console.log( request.query )
    response.json( request.query )
} )

//////////////////////////////////
//
// Route Params: request.params ()
//
// http://localhost:3333/user/1
app.delete( '/user/:id', ( req, res ) =>
{
    console.log( req.params.id )
    res.send( req.params.id )
} )

/////////////////////////////////////
//
// Request.body
//
app.post( '/user', ( req, res ) =>
{
    const body = req.body;
    console.log( `Meu nome é ${ body.name } 
    e email é ${body.email }` )
    res.json( req.body )
} )
//#endregion

// principas metodos HTTP: GET, POST, PUT e DELETE

// Porta utilizada é a 3333
app.listen( 3333 );