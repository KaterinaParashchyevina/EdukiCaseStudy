/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from './src/screens/Main';
import { Item } from './src/screens/Item';


const Root = createStackNavigator();
function App(): React.JSX.Element {
 
  return (
    <NavigationContainer>
      <Root.Navigator   screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}>
        <Root.Screen name='Main' component={Main}/>
        <Root.Screen name='Item' component={Item}/>
      </Root.Navigator>
    </NavigationContainer>
  );
}


export default App;
