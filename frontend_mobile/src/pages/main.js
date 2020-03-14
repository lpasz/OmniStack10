import React from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { useEffect, useState } from 'react'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'

function Main( { navigation } )
{

    const [ currentRegion, setCurrentRegion ] = useState( null )

    const [ techsInputAndButtonHeight, setTechsInputAndButtonHeight ] = useState( 20 )

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

    Keyboard.addListener( "keyboardDidShow", ( e ) =>
    {
        const { height } = e.endCoordinates;
        setTechsInputAndButtonHeight(height+20) 
    } )

    Keyboard.addListener( 'keyboardDidHide', ( e ) =>
    {
        setTechsInputAndButtonHeight(20) 
    } )

    if ( !currentRegion )
    {
        return null;
    }

    return (
        <>
            <MapView initialRegion={currentRegion} style={styles.map}>
                <Marker coordinate={{ latitude: -29.9271178, longitude: -50.9480219 }} >
                    <Image style={styles.avatar} source={{ uri: "https://avatars1.githubusercontent.com/u/42593470?s=460&v=4" }} />
                    <Callout onPress={() =>
                    {
                        navigation.navigate( 'Profile', { github_username: "diego3g" } )
                    }}>
                        <View style={styles.callout}>
                            <Text style={styles.devName}>HeyJude</Text>
                            <Text style={styles.devBio}>Make a Sad Song</Text>
                            <Text style={styles.devTechs}>And make it Better</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <View style={[ styles.searchForm, { bottom: techsInputAndButtonHeight }]}>
                <TextInput
                    style={styles.searchInputs}
                    placeholder="Buscar devs por Techs ..."
                    placeholderTextColor='#999'
                    autoCapitalize="words"
                    autoCorrect={false}

                />
                <TouchableOpacity style={styles.loadBtn}>
                    <MaterialIcons name='my-location' size={20} color='# FFF' style={styles.icon} />
                </TouchableOpacity>
            </View>
        </> )
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
        width: 200,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,

    },
    devBio: {
        color: '#666',
        marginTop: 5,

    },
    devTechs: {
        marginTop: 5
    },
    searchForm: {
        position: 'absolute',        
        //paddingBottom:20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
        justifyContent:'flex-end'
    },
    searchInputs: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        elevation: 5,
        
    },
    loadBtn: {
        width: 50,
        height: 50,
        backgroundColor: '#7D40E7',
        borderRadius: 25,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10,

    },
    icon: {
        color: '#FFF'
    }

} )

export default Main