import React from 'react'
import { StatusBar, StyleSheet, Text, View, } from 'react-native'
import SplashScreen from './src/components/SplashScreen'
import HomePage from './src/routes/Home'

const App = () => {
  const [showSplash,setShowSplash] = React.useState(true)
  React.useEffect(() =>{
      setTimeout(() =>{
          setShowSplash(false)
      },3000)
  },[])
  if(showSplash){
    return(
      <SplashScreen />
    )
  }else{
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F6AD2D"/>
        <HomePage />
      </View>
    )
  }
 
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
