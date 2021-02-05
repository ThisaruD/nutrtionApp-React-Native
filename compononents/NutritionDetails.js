import React,{ useState} from 'react';
import {View,TextInput,StyleSheet,Text} from "react-native";
//import {Button} from "react-native-web";
//import {Text} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label , Button } from 'native-base';
import axios from "axios";

import DetailsTab from "./DetailsTab";

export default function  NutritionDetails ({submitHandler}){

    const [fruit,setFruit] = useState('');
    const [count,setCount] = useState('');
    const [sentence,setSentence] = useState('');
    const [vitamin, setVitamin] = useState('');
    const [foods, setFoods] = useState([]);
    const [isLoad, setIsLoad] = useState('false');

    const changeFruitName = (val) =>{
        setFruit(val);
    }

    const changeFruitCount =(val) =>{
        setCount(val);
    }

    const changeVitamin = (val) =>{
        setVitamin(val);
    }

    const submitFunc = () =>{
        //console.log(fruit);
        //console.log(count);
        setSentence("vitamin "+vitamin+" in "+count+" "+fruit);
        console.log(sentence);

        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer',
            params: {q: sentence},
            headers: {

            }
        };
        //How much vitamin c is in
        axios.request(options).then( response => {
            console.log(response.data);

            setFoods([response.data]);
            setIsLoad('true');
        }).catch(function (error) {
            console.error(error);
        });

        // if(foods){
        //     console.log('data load');
        // }else{
        //     console.log('data not load');
        // }



    }


    if(isLoad){
       //after loading
       //  <DetailsTab {()=>{foods.navigate('DetailsTab',foods)}}/>

    }else{
        //initial render
        return(
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label style={styles.text}>Enter Fruit Name</Label>
                            <Input style={styles.input}
                                   onChangeText={changeFruitName}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label style={styles.text}>Add Fruit Count</Label>
                            <Input style={styles.input}
                                   keyboardType='numeric'
                                   onChangeText={changeFruitCount}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label style={styles.text}>Add Vitamin Type</Label>
                            <Input style={styles.input}
                                   onChangeText={changeVitamin}
                            />
                        </Item>
                        <Button style={styles.button} title='Submit' >
                            <Text style={styles.textButton}>Submit</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }





}


const styles = StyleSheet.create({
    input:{
       borderStyle:'solid',
        borderRadius: 10,
        borderColor:'black',
        borderWidth:2,
        marginTop:20,
         textAlign:'left',
    },
    text:{
        fontSize:20,
        alignContent:'center',

    },
    button:{
         marginTop:10,
        marginHorizontal:120,
        borderRadius: 10,
        width:120,
        backgroundColor:'#4db8ff',
    },
    textButton:{
        fontSize:20,
        textAlign: 'center',
        marginLeft:30,
    },
})
