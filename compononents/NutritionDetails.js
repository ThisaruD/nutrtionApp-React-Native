import React from 'react';
import {View,TextInput,StyleSheet,Text} from "react-native";
//import {Button} from "react-native-web";
//import {Text} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label , Button } from 'native-base';

export default function  NutritionDetails (){
    return(
        <Container>
            <Header />
            <Content>
                <Form>
                    <Item stackedLabel>
                        <Label style={styles.text}>Enter Fruit Name</Label>
                        <Input style={styles.input}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label style={styles.text}>Add Fruit Count</Label>
                        <Input style={styles.input} />
                    </Item>
                    <Button title='Submit'/>

                </Form>
            </Content>
        </Container>
    );
}


const styles = StyleSheet.create({
    input:{
       borderStyle:'solid',
        borderRadius: 10,
        borderColor:'black',
        borderWidth:2,
        marginTop:20,
    },
    text:{
        fontSize:20,
        alignContent:'center',
    }
})
