
import React from 'react'
import LoginScreen from './src/Screens/LoginScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './src/Screens/LandingPage';
import Register from './src/Screens/Register';
import Home from './src/Screens/Home';
import VerifyOtp from './src/Screens/VerifyOtp';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}
      initialRouteName='register'>
        <Stack.Screen name="onLandingPage" component={LandingPage} />
        <Stack.Screen name="login" component={LoginScreen}/>
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="verifyOtp" component={VerifyOtp} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default App
