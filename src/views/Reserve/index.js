import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";

export default function Reserve() {

    const navigation = useNavigation();

    function navigateToReserve(){
        navigation.navigate('Reserve');
    }

    function navigateToDetails(){
        navigation.navigate('Detalhes');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => navigateToDetails()}
                    style={styles.returnButton}
                >
                    <AntDesign name="left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Nome Restaurante</Text>
            </View>
            <View style={styles.infos}>
                <AntDesign name="calendar" size={24} />
                <Text style={styles.text}>Texto Descrição</Text>
                <AntDesign name="clockcircleo" size={24} />
                <Text style={styles.text}>Texto Descrição</Text>
                <Button title="Reservar" onPress={() => navigateToReserve()}></Button>
            </View>
        </View>
    );
}