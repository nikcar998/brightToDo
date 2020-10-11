import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

function HeaderBTD() {

    return (
      <>
      <View style={styles.headerStyle}>
        <Text style={styles.headerText}> BrightToDo </Text>
      </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    headerStyle:{
        height:45,
        backgroundColor:'#f4511e',
    },
    headerText:{
      fontWeight: 'bold',
      textAlign:'center',
      fontSize:30,
      color:'#fff'
    },
  });
  
  export default HeaderBTD;
  