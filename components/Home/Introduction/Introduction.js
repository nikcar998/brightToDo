import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';



function Introduction(){
    return (
        <View style={styles.introduction} >
        <Text style={styles.introductionText}> Welcome I will always offer you two 
            jokes to smile every time you use this app. Scroll from the left to the right
            to start using the notes. </Text>
      </View>
    )
}
const styles = StyleSheet.create({
    introduction:{
      textAlign:'center',
      margin:20,
      backgroundColor:'#f4511e',
      borderWidth:1,
      borderRadius:4,
      padding:10
    },
    introductionText:{
      textAlign:'center',
      fontSize:20,
      color:'#fff',
    }
  });
  
  export default Introduction;