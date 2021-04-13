import React from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Lista() {

    const navigation = useNavigation();

    function navigateToDetails(){
        navigation.navigate('Detalhes');
    }

    const dados = ["Pizza", "Bares", "Shows", "Festas"];


    return (
        <View style={styles.container}>
            <View style={styles.header}>
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