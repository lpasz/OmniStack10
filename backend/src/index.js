const express = require( 'express' )
const routes = require( './routes' )
const cors = require( 'cors' )
const http = require( 'http' )
const { setupWebSocket } = require( './socket' )
const { MongoDBConnection } = require( './database' )

MongoDBConnection()

const app = express();
const server = http.Server( app )

app.use( cors() )
app.use( express.json() )
app.use( routes )
setupWebSocket( server )
server.listen( 3333 )

