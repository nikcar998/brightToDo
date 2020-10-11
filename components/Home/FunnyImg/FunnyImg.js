import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import Axios from 'axios';
import _ from 'lodash';

function FunnyImg(){

    const [result, setResult]=useState('');
    const [resultText, setResultText]=useState('')

    function getValues(){
      const randValue= Math.floor(Math.random() * 2371);
      var url = 'http://xkcd.com/'+ randValue+'/info.0.json';
    Axios.get(url)
     .then(data=>{
       console.log(_.get(data,'status','non trovato'));
       const data1=_.get(data,'data.img',"not found");
       console.log(data1);
       setResult(data1);
       return data1
     }).catch(error => {
       console.log(error)
     })
    }
    function getTextValues(){
        var url = 'https://icanhazdadjoke.com/slack';
      Axios.get(url)
       .then(data=>{
         console.log(_.get(data,'status','non trovato'));
         const data1=_.get(data,'data.attachments[0].text',"An error has occured");
         console.log(data1);
         setResultText(data1);
         return data1
       }).catch(error => {
         console.log(error)
       })
      }
    useEffect(() =>{
        getValues();
        getTextValues();
      },[])
  

    return(
        <View style={styles.funnyThings}>
        <Image
          style={styles.funnyImage}
          source={{
            uri: result,
          }}
        />
        <Text style={styles.funnyText}>"{resultText}"</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    funnyImage:{
      width:'100%',
      height:undefined,
      aspectRatio:1,
      resizeMode:'contain'
    },
    funnyThings:{
        justifyContent:'center',
        alignItems:'center'
    },
    funnyText:{
        fontSize:18,
        textAlign:'center',
        margin:25,
        backgroundColor:'#f4511e',
        color:'#fff',
        opacity:0.9,
        borderWidth:1,
        borderRadius:4,
        padding:10

    },
  });

  export default FunnyImg;