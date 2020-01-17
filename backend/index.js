// Importação do Modulo Express
const express = require( 'express' );

//Constroi o App 
const app = express();

// Hello world  with Express
app.get( '/', ( request, response ) =>
{
    // retorna uma resposta em Texto
    //return response.send( 'Eai meu Parceria !' );
    // Retorna uma resposta json
    return response.json( { 'Hello' : 'World!'} );
} )

// principas metodos HTTP: GET, POST, PUT e DELETE

// Porta utilizada é a 3333
app.listen( 3333 );