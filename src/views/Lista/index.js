import React from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";

export default function Lista() {

    const navigation = useNavigation();

    function navigateToCategoria(){
        navigation.navigate('Categoria');
    }

    function navigateToDetails(){
        navigation.navigate('Detalhes');
    }

    const dados = ["Pizza", "Bares", "Shows", "Festas"];


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => navigateToCategoria()}
                    style={styles.returnButton}
                >
                    <AntDesign name="left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>LUGARES</Text>
            </View>


            <FlatList
                data={dados}
                style={styles.categorias}
                numColumns={1}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigateToDetails()}
                        >
                            <View style={styles.categoria}>
                                <Text>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}
