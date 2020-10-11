import React, {useState, useEffect} from 'react';
import {
  ScrollView,
} from 'react-native';
import InsertItem from "../InsertItem/InsertItem"
import Item from "../Item/item"

function NotesItem(){
    const[items, setItems]=useState([{titled:'example', texted:"prova prova", id:'2343wffwfe'}])

    return(
            <ScrollView>
            <InsertItem setItems={setItems} items={items}/>
            {items.map((data) => (
                <Item titled={data.titled} texted={data.texted} key={data.id} />
            ))}
            </ScrollView>
    )
}


export default NotesItem;