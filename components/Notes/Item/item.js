import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button
} from 'react-native';


function Item(props){
    return(
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{props.titled}</Text>
            <Text style={styles.itemText}>{props.texted}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        margin:30,
        borderWidth:1,
        borderColor:'black',
        borderRadius:4,
        backgroundColor:'#f4511e',
    },
    itemTitle:{
        borderBottomWidth:1,
        textAlign:'center',
        fontSize:20
    },
    itemText:{
        height:100,
        fontSize:15,
    }
  });

export default Item

