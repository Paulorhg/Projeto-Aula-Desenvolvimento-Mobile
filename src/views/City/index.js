import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";


import styles from "./styles";

export default function City() {

    const navigation = useNavigation();

    function navigateToCategoria(){
        navigation.navigate('Categoria');
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}> 
            <Text>  </Text>
            </View>
            <View style={styles.content}>
                <Text>Escolha a cidade</Text>
                <Button title="Proximo" onPress={navigateToCategoria}></Button>
            </View>
        </View>
    );
}