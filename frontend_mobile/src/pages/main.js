import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { useEffect, useState } from 'react'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main( { navigation })
{

    const [ currentRegion, setCurrentRegion ] = useState( null )

    useEffect( () =>
    {
        async function loadInitialPosition()
        {
            const { granted } = await requestPermissionsAsync()

            if ( granted )
            {
                const { coords } = await getCurrentPositionAsync( {
                    enableHighAccuracy: true
                } );

                const { longitude, latitude } = coords

                setCurrentRegion( {
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                } )
            }
        }
        loadInitialPosition()
    }, [] )

    if ( !currentRegion )
    {
        return null;
    }

    return ( <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: -29.9271178, longitude: -50.9480219 }} >
            <Image style={styles.avatar} source={{ uri: "https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" }} />
            <Callout onPress={() =>
            {
                navigation.navigate( 'Profile', {github_username : "diego3g"})
            }}>
                <View style={styles.callout}>
                    <Text style={styles.devName}>HeyJude</Text>
                    <Text style={styles.devBio}>Make a Sad Song</Text>
                    <Text style={styles.devTechs}>And make it Better</Text>
                </View>
            </Callout>
        </Marker>
    </MapView> )
}

const styles = StyleSheet.create( {
    map: {
        flex: 1
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF',
    },
    callout: {
        width:200,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
        
    },
    devBio: {
        color: '#666',
        marginTop:5,
        
    },
    devTechs: {
        marginTop:5
    },

} )

export default Main