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
            jokes to smile every time you use this app. Use the button on the top-left corner
            to start using the notes. </Text>
      </View>
    )
}
const styles = StyleSheet.create({
    introduction:{
      textAlign:'center',
      margin:25,
      backgroundColor:'white',
      borderWidth:1,
      borderRadius:4,
      padding:10
    },
    introductionText:{
      textAlign:'center',
      fontSize:18
    }
  });
  
  export default Introduction;