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
} from 'react-native';
import FunnyImg from "../FunnyImg/FunnyImg"
import Introduction from "../Introduction/Introduction"
import Header from "../HeaderBTD/HeaderBTD"
function Home() {

  return (
    <>
    <ImageBackground style={styles.bckgrImg} imageStyle={styles.imag}
          source={{
            uri: 'https://images.template.net/wp-content/uploads/2017/06/Ruled-Graph-Paper.jpg',
          }}>
            <Header />
            <Introduction />
            <FunnyImg />
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bckgrImg: {
    justifyContent: "space-around",
    alignItems:'stretch',
  },
  imag:{
    marginTop:-16,
    height:900,
    opacity:0.7
  }
});

export default Home;
