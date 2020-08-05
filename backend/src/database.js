const mongoose = require( 'mongoose' );

exports.MongoDBConnection = () =>
{
    // Define qual database vai ser usado
    is_local_database = true;
    // If is local, get local data base, else online data base
    mongoose.connect(
        'mongodb://localhost:27017/Omnistack10',
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        } )
}
