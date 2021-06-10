import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api';

import styles from "./styles";

export default function Lista({route}) {

    const navigation = useNavigation();
    const {categoria} = route.params;
    const [ estabelecimentos, setEstabelecimentos] = useState([]);

    console.log(categoria)

    function navigateToCategoria(){
        navigation.navigate('Categoria');
    }

    function navigateToDetails(escolhido){
        navigation.navigate('Detalhes', 
        {
            estabelecimento: escolhido
        });
    }

    useEffect(() => {
        try {
            api.get('/estabelecimento',{}).then(res => {
                console.log(res.data.estabelecimentos);
                setEstabelecimentos(res.data.estabelecimentos);
            })
        } catch (error) {
        }
    }, []);


    // const dados = ["Pizza", "Bares", "Shows", "Festas"];


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

            {
                estabelecimentos.length === 0 ? <></>
                
                :

                <FlatList
                    data={estabelecimentos}
                    style={styles.estabelecimentos}
                    numColumns={1}
                    keyExtractor={item => item}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity 
                                onPress={() => navigateToDetails(item)}
                            >
                                <View style={styles.estabelecimento}>
                                    <Text style={styles.textList}>{item.nome}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            }
        </View>
    );
}