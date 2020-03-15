import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { Marker, Callout } from 'react-native-maps'
import ArrayWithStringsCapitalized from '../utils/ArrayToStringCapilalized'


function DevMaker( { dev, navigation } )
{
    const { name, github_user, bio, avatar_url, techs, location } = dev

    const longitude = location.coordinates[ 0 ]
    
    const latitude = location.coordinates[ 1 ]
    
    return ( <Marker coordinate={{
        latitude,
        longitude,
    }} >
        <Image style={styles.avatar}
            source={{ uri: avatar_url }}
        />
        <Callout style={{borderRadius:20}} onPress={() =>
        { 
            navigation.navigate( 'Profile', { github_username: github_user } )
        }}>
            <View style={styles.callout}>
                <Text style={styles.devName}>{name}</Text>
                <Text style={styles.devBio}>{bio}</Text>
                <Text style={styles.devTechs}>{ArrayWithStringsCapitalized(techs)}</Text>
            </View>
        </Callout>
    </Marker> )
}

const styles = StyleSheet.create( {
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF',
    },
    callout: {
        width: 200,
        borderRadius:10
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
} )


export default DevMaker