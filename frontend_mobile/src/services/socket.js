import socketio from 'socket.io-client'

const socket = socketio( 'http://192.168.25.8:3333',
    {
        autoConnect: false,
    } )

function connectSocket({latitude, longitude, techs})
{
    //console.log("\n\n Connecting . . . \n\n\n")
    socket.io.opts.query = {latitude, longitude, techs}
    socket.connect()
}

function subscribeToNewDevs(subscribeFunction)
{
    socket.on('NewDevAdded',subscribeFunction)
}

function disconnectSocket()
{
    if ( socket.connected )
    {
        //console.log('Disconnecting')
        socket.disconnect()
    }
}

export
{
    connectSocket,disconnectSocket, subscribeToNewDevs
}