module.exports = function getDistanceFromLatLonInKM( centerCoordinates, pointCoordinates )
{
    function degreesToRadianos( deg )
    {
        return deg * ( Math.PI / 180 )
    }

    const radius = 6371;

    const { latitude: latitude1, longitude: longitude1 } = centerCoordinates;
    const { latitude: latitude2, longitude: longitude2 } = pointCoordinates;

    const latitudeDifference = degreesToRadianos( latitude2 - latitude1 )
    const longitudeDifference = degreesToRadianos( longitude2 - longitude1 )

    const a = Math.pow( Math.sin( latitudeDifference / 2 ), 2 ) *
        Math.cos( degreesToRadianos( latitude1 ) ) * Math.cos( degreesToRadianos( latitude2 ) ) *
        Math.pow( Math.sin( longitudeDifference / 2 ), 2 )

    const center = 2 * Math.atan2( Math.sqrt( a ), Math.sqrt( 1 - a ) )
    const distance = radius * center

    return distance

}