import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import NutritionDetails from "./compononents/NutritionDetails";
import {StyleSheet, View} from "react-native";

export default function App() {

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title styles={styles.header}>Nutrition App</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View>
                        <NutritionDetails/>
                    </View>



                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="person" />
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );

}

const styles = StyleSheet.create({
    header:{
      alignContent:'center',
    }
})
