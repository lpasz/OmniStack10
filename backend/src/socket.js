const socketIo = require( 'socket.io' )
const parseString = require( './utils/parseStringToArray' )
const distanceInKm = require( './utils/calculateDistance' )

const socketConnections = [];
let io
exports.setupWebSocket = ( server ) =>
{
    io = socketIo( server )

    io.on( 'connection', socket =>
    {
        const { latitude, longitude, techs } = socket.handshake.query

        socketConnections.push( {
            id: socket.id,
            coordinates: {
                latitude: Number( latitude ),
                longitude: Number( longitude ),
            },
            techs: parseString.Techs( techs )
        } )
        console.log( socket.id )
        console.log( socket.handshake.query )
    } )
}

exports.findConnection = ( coordinates, techs ) =>
{
    return socketConnections.filter( conn =>
    {
        return distanceInKm( coordinates, conn.coordinates ) < 10
            && conn.techs.some( item => techs.includes( item ) )
    } )
}

exports.sendMessageToSocket = ( socketIds, message, data ) =>
{
    socketIds.forEach( id =>
    {
        console.log(`sending to ${id.id} the msg ${message} with ${data}`)
        io.to( id.id ).emit( message, data )
    } )
}