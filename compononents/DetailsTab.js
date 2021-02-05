import React,{ useState} from 'react';
import {View,TextInput,StyleSheet,Text} from "react-native";


export default function DetailsTab(foods){

    return(
        <View>
            <Text>{foods.getParameter('answer')}</Text>
        </View>
    );

}
