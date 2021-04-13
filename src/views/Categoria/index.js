import React from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";


export default function Categoria() {

    const navigation = useNavigation();

    function navigateToList(){
        navigation.navigate('Lista');
    }

    function navigateToCity(){
        navigation.navigate('City');
    }

    const dados = ["Pizza", "Bares", "Shows", "Festas", "Oriental", "Churrascaria"];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => navigateToCity()}
                    style={styles.returnButton}
                    >
                    <AntDesign name="left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>CATEGORIAS</Text>
            </View>

            <FlatList
                data={dados}
                style={styles.categorias}
                numColumns={2}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigateToList()}
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
