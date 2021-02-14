import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AppTitleBar = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,color:'#fff'}}>CGPA Calculator</Text>
        </View>
    )
}

export default AppTitleBar

const styles = StyleSheet.create({
    container:{
        height:50,
        padding:10,
        backgroundColor:'#F7A72E',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    }
})
