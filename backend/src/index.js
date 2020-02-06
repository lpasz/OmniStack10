// Importação do Modulo Express
const express = require( 'express' );
//Passwords and user manager
const passwords = require( './passwords.json' );
// Install Mongoose for MongoDb Connection
const mongoose = require( 'mongoose' );
//Constroi o App 
const app = express();
// Enable cors
const cors = require( 'cors' );

const isLocalHost = false;

// Define as opções necessarias ao mongo db
mongooseOption = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Define qual database vai ser usado
is_local_database = true;

// If is local, get local data base, else online data base
if ( is_local_database )
{
    // localhost 
    mongoose.connect( 'mongodb://localhost:27017/Omnistack10', mongooseOption )
}
else
{
    // Connection string and option for MongoDB Atlas
    mongoose.connect( `mongodb+srv://${ passwords.mongoDb.user }:${ passwords.mongoDb.password }@omnistack10-finq3.mongodb.net/test?retryWrites=true&w=majority`, mongooseOption );
}

app.use(cors())//{origin:`http://${(isLocalHost)?"localhost":"192.168.0.111"}:3000`} 
// Habilita o express a entender json e sempre deve estar antes das
app.use( express.json() );
// Importa o module de rotas
const routes = require( './routes' );
// Habilita as rotas importadas no express
app.use( routes );
// Porta utilizada é a 3333
app.listen( 3333 );

