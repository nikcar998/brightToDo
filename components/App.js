
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import Home from "./Home/HomeComponent/Home"
import Notes from "./Notes/Notes"


const Drawer = createDrawerNavigator();


function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerStyle={styles.drawerSt}
        drawerContentOptions={{activeTintColor: '#fff', 
                                itemStyle: { marginVertical: 10 },
          }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notes" component={Notes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerSt:{
    backgroundColor:'#f4511e'
  }
});

export default App;
