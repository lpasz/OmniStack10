const mongoose = require( 'mongoose' );

// Utils Schema of user location 
const PointSchema = require('./utils/PointSchema');


const devSchema = mongoose.Schema(
    {
        name: String,
        github_user: String,
        bio: String,
        avatar_url: String,
        techs: [String],
        location:{
            type: PointSchema,
            i: '2dsphere',
        },        
    }
);

module.exports = mongoose.model('Dev',devSchema);