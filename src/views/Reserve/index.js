import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";

export default function Reserve() {

    const navigation = useNavigation();

    function navigateToReserve(){
        navigation.navigate('Reserve');
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Nome Restaurante</Text>
            </View>
            <View style={styles.infos}>
                <AntDesign name="calendar" size={24} />
                <Text style={styles.text}>Texto Descrição</Text>
                <Text style={styles.titleText}>Avaliação:</Text>
                <Text style={styles.titleText}>Endereço</Text>
                <Text style={styles.text}>texto endereço</Text>
                <Text style={styles.titleText}>Telefone</Text>
                <Text style={styles.text}>texto telefone</Text>

                <Button title="Reservar" onPress={() => navigateToReserve()}></Button>

            </View>
        </View>
    );
}