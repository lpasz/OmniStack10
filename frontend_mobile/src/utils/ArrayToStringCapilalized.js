function ArrayToStringCapitalized(array)
{
    const arrayWithStringsCapitalized = array.map( str => ( str.toLowerCase().replace( /^\w/, c => c.toUpperCase() ) ) )
    const joinedStrings = arrayWithStringsCapitalized.join( ', ' )
    return joinedStrings
}

export default ArrayToStringCapitalized