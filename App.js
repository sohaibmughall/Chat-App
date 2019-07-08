// import { AppLoading } from 'expo';
// import { Asset } from 'expo-asset';
// import * as Font from 'expo-font';
// import React, { useState } from 'react';
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import AppNavigator from './navigation/AppNavigator';

// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = useState(false);

//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return (
//       <AppLoading
//         startAsync={loadResourcesAsync}
//         onError={handleLoadingError}
//         onFinish={() => handleFinishLoading(setLoadingComplete)}
//       />
//     );
//   } else {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//         <AppNavigator />
//       </View>
//     );
//   }
// }

// async function loadResourcesAsync() {
//   await Promise.all([
//     Asset.loadAsync([
//       require('./assets/images/robot-dev.png'),
//       require('./assets/images/robot-prod.png'),
//     ]),
//     Font.loadAsync({
//       // This is the font that we are using for our tab bar
//       ...Ionicons.font,
//       // We include SpaceMono because we use it in HomeScreen.js. Feel free to
//       // remove this if you are not using it in your app
//       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//     }),
//   ]);
// }

// function handleLoadingError(error: Error) {
//   // In this case, you might want to report the error to your error reporting
//   // service, for example Sentry
//   console.warn(error);
// }

// function handleFinishLoading(setLoadingComplete) {
//   setLoadingComplete(true);
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
import * as React from 'react';
import { Constants, } from 'expo';
import { StyleSheet, Text, View,Button,TouchableNativeFeedback } from 'react-native';
import { createStackNavigator, createAppContainer,DrawerNavigator,StackNavigator, } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import LinksScreen from "./screens/LinksScreen";
import SettingsScreen from "./screens/SettingsScreen"
import Signup from './screens/Signup'

 



const RootNavigation = createStackNavigator({
  
  Home:{
    screen:HomeScreen
  },

// worker:{
//     screen:Loginwithworker
//   },
  // Details:{
  //   screen:Details
  // },
// Home:{
//     screen:HomeScreen
//   },
// offers:{
//   screen:Offers
// },
link:{
  screen:LinksScreen
},
// Chat:{
//   screen:Chats
// },
// Signup:{
//   screen:Signup

// },
setting:{
  screen:SettingsScreen
},



});




const App =createAppContainer(RootNavigation);
export default App ;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


