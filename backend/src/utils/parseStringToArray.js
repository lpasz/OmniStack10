module.exports = {
    Techs( techs )
    {
        // Remove espaços e joga todas as strings para UPPER para padronizar buscas no backend
        return String( techs ).toUpperCase().split( "," ).map( str => str.trim().replace( /\s/g, '' ) ); 
    }
}