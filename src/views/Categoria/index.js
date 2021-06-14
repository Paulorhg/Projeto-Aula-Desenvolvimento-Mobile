import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";

import api from "../../services/api";

export default function Categoria({route}) {

    
    const navigation = useNavigation();
    const [ categorias, setCategorias ] = useState([]);
    const {cidade} = route.params;

    console.log("params " + cidade);

    function navigateToList(estabelecimentos){
        navigation.navigate('Lista', {
            estabelecimentos: estabelecimentos
        });
    }

    function navigateToCity(){
        navigation.navigate('City');
    }

    useEffect(() => {
        
        try {
            api.get('/categoria',{}).then(res => {
                console.log(res.data.categorias);
                setCategorias(res.data.categorias)
            })
        } catch (error) {
            
        }
    }, []);

    // const dados = ["Pizza", "Bares", "Shows", "Festas", "Oriental", "Churrascaria"];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => navigateToCity()}
                    style={styles.returnButton}
                    >
                    <AntDesign name="left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>CATEGORIAS </Text>
                
            </View>

            {
                categorias.length === 0 ? <></>
                :
                    <FlatList
                        data={categorias}
                        style={styles.categorias}
                        numColumns={2}
                        keyExtractor={item => item}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity 
                                    onPress={() => navigateToList(item.estabelecimento)}
                                >
                                    <View style={styles.categoria}>
                                        <Text>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
            }

        </View>
    );
}