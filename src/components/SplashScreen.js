import React from 'react'
import { StyleSheet, Text, View,ActivityIndicator, StatusBar, Dimensions, Image } from 'react-native'

const logo = require('../../assets/logo.png')
const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#536DFE" />
            <View style={styles.logo}>
                    <Image source={logo} 
                    style={{
                        width:100,
                        height:100,
                       
                    }}
                    />
            </View>
            <Text style={{fontSize:20,color:'#fff'}}>Calculate your CGPA with ease.</Text>

            <View style={{position:'absolute',bottom:20,justifyContent:'center',alignItems:'center'}}>
                 <ActivityIndicator size="large" color="#fff" />
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#536DFE'
    },
    logo:{
        height:160,
        width:Dimensions.get('screen').width/2.5,
        backgroundColor:'#fff',
        marginBottom:40,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    }
})
