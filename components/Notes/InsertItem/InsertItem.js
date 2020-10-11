import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button
} from 'react-native';

function InsertItem(props){
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    function submitHandler(){
            const items= props.items
            const setItems = props.setItems;
            setItems([...items,{titled:title, texted:text, id:title}])
    }
    return (
      <View style={styles.inputItem} >
        <TextInput
          value={title}
          style={styles.inputTitle}
          placeholder="Insert the Title"
          onChangeText={(title) => {
            setTitle(title)
          }}
        />
         <TextInput
          value={text}
          style={styles.inputText}
          placeholder="Insert the Text"
          onChangeText={(text) => {
            setText(text)
          }}
        />
        <Button title="New Note" onPress={submitHandler}></Button>
      </View>
    )
}

const styles = StyleSheet.create({
    inputItem:{
        margin:30,
        borderWidth:1,
        borderColor:'black',
        borderRadius:4,
        backgroundColor:'#f4511e',
    },
    inputTitle:{
        borderBottomWidth:1
    },
    inputText:{
        height:100
    }
  });
export default InsertItem