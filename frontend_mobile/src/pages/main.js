import React from 'react'
import { StyleSheet, Image, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import MapView from 'react-native-maps'
import { useEffect, useState } from 'react'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'
import api from '../services/api'
import DevMarker from '../components/DevMarker'

/// Validar a busca antes de dar refresh nos devs (erro ao fazer isso com o input vazio)
// Ver se existe algum modo escuro pro mapa, o google tem  (DONE WITH THE API GOOGLE)
// Switch de esqeuma de cores no topo (PRA ficar TOP)
// Adicionar um tela de loading

function Main( { navigation } )
{

    const [ currentRegion, setCurrentRegion ] = useState( null )
    const [ devs, setDevs ] = useState( [] )
    const [ techs, setTechs ] = useState( '' )
    const [ techsInputAndButtonHeight, setTechsInputAndButtonHeight ] = useState( 20 )

    async function loadDevs()
    {
        const { latitude, longitude } = currentRegion
        const response = await api.get( '/search', {
            params: {
                latitude,
                longitude,
                techs,
            }
        } )
        setDevs( response.data )
    }

    async function loadAllDevs()
    {
        const response = await api.get( '/devs' )
        console.log( response.data )
        setDevs( response.data )
    }

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
        loadAllDevs()
    }, [] )

    function handleRegionChanged( region )
    {
        setCurrentRegion( region )
    }

    Keyboard.addListener( "keyboardDidShow", ( e ) =>
    {
        const { height } = e.endCoordinates;
        setTechsInputAndButtonHeight( height + 20 )
    } )

    Keyboard.addListener( 'keyboardDidHide', ( e ) =>
    {
        setTechsInputAndButtonHeight( 20 )
    } )

    if ( !currentRegion )
    {
        return null;
    }

    return (
        <>
            <MapView customMapStyle={[
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#242f3e"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#746855"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#242f3e"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#d59563"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#d59563"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#263c3f"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#6b9a76"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#38414e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#212a37"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9ca5b3"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#746855"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#1f2835"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#f3d19c"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2f3948"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#d59563"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#17263c"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#515c6d"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#17263c"
                        }
                    ]
                }
            ]} loadingEnabled={true} mapType={"standard"} onRegionChangeComplete={handleRegionChanged}
                initialRegion={currentRegion}
                style={styles.map}>
                {devs.map( dev => ( <DevMarker key={dev.github_user} dev={dev} navigation={navigation} /> ) )}
            </MapView>
            <View style={[ styles.searchForm, { bottom: techsInputAndButtonHeight } ]}>
                <TextInput
                    style={styles.searchInputs}
                    placeholder="Buscar devs por Techs ..."
                    placeholderTextColor='#999'
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />
                <TouchableOpacity style={styles.loadBtn} onPress={loadDevs}>
                    <MaterialIcons name='my-location'
                        size={20}
                        color='# FFF'
                        style={styles.icon}
                    />
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
        justifyContent: 'flex-end'
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
        marginLeft: 10,

    },
    icon: {
        color: '#FFF'
    }

} )

export default Main