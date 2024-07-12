import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaView, StyleSheet,} from 'react-native'
import SignInScreen from './src/screens/ScinInScreen/SignInScreen'
import SignUpScreen from './src/screens/SingnUpScreen/SignUpScreen'
import VerifyEmailScreen from './src/screens/VerifyEmailScreen/VerifyEmailScreen'
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen/ForgetPasswordScreen'
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen'
import Navigation from './src/Navigation/Navigation'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>

      {/* <SignInScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <VerifyEmailScreen/> */}
      {/* <ForgetPasswordScreen/> */}
      <Navigation/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC', // Set the background color to VERYLIGT BLUE
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 24, // Adjust the font size as needed
    textAlign: 'center',
    color: 'blue'
  },
})