/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import FunnyImg from "./FunnyImg/FunnyImg"
import HeaderBTD from "./HeaderBTD/HeaderBTD"
import Introduction from "./Introduction/Introduction"
function App() {

  return (
    <>
    <ImageBackground style={styles.bckgrImg} imageStyle={styles.imag}
          source={{
            uri: 'https://images.template.net/wp-content/uploads/2017/06/Ruled-Graph-Paper.jpg',
          }}>
            <HeaderBTD />
            <Introduction />
            <FunnyImg />
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bckgrImg: {
    justifyContent: "flex-start",
    alignItems:'stretch',
  },
  imag:{
    marginTop:-15,
    height:900,
    opacity:0.8
  }
});

export default App;
