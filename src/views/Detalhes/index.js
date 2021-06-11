import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api';

import styles from "./styles";

export default function Detalhes({route}) {

    const navigation = useNavigation();

    const {estabelecimento} = route.params;

    console.log(" estabelecimento " + estabelecimento.nome)

    function navigateToReserve(){
        navigation.navigate('Reserve');
    }

    function navigateToLista(){
        navigation.navigate('Lista');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity 
                onPress={() => navigateToLista()}
                style={styles.returnButton}
            >
                <AntDesign name="left" size={24} color="#fff" />
            </TouchableOpacity>
                <Text style={styles.textHeader}>{estabelecimento.nome}</Text>
            </View>
            <View style={styles.infos}>
                <Text style={styles.titleText}>Descrição</Text>
                <Text style={styles.text}>Texto Descrição</Text>
                <Text style={styles.titleText}>Avaliação:</Text>
                <Text style={styles.titleText}>Endereço</Text>
                <Text style={styles.text}>texto endereço</Text>
                <Text style={styles.titleText}>Telefone</Text>
                <Text style={styles.text}>texto telefone</Text>

                <Button title="Fazer Reserva" onPress={() => navigateToReserve()}></Button>

            </View>
        </View>
    );
}