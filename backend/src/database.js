const mongoose = require( 'mongoose' );
const passwords = require( './passwords.json' );

exports.MongoDBConnection = () =>
{
    mongooseOption = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    // Define qual database vai ser usado
    is_local_database = true;
    // If is local, get local data base, else online data base
    mongoose.connect( ( is_local_database )
        ? 'mongodb://localhost:27017/Omnistack10'
        : `mongodb+srv://${ passwords.mongoDb.user }:${ passwords.mongoDb.password }@omnistack10-finq3.mongodb.net/test?retryWrites=true&w=majority`,
        mongooseOption )
}
