import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground
} from 'react-native';
import Header from "../Home/HeaderBTD/HeaderBTD"
import NotesItems from "./NotesItem/NotesItem"
function Notes(){
    return(
        
        <ImageBackground style={styles.bckgrImg} imageStyle={styles.imag}
        source={{
          uri: 'https://images.template.net/wp-content/uploads/2017/06/Ruled-Graph-Paper.jpg',
        }}>
        <Header />
        <NotesItems />
        </ImageBackground>
    )
}

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


export default Notes;