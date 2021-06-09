import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";


export default function Categoria() {

    // const cidade =  this.props.navigation.getParam('cidade', 'nothing sent')
    const navigation = useNavigation();
    const catSelecionada = 'Sorocaba';
    const [ categorias, setCategorias ] = useState([]);

    function navigateToList(){
        navigation.navigate('Lista', {
            categoria: catSelecionada
        });
    }

    function navigateToCity(){
        navigation.navigate('City');
    }

    useEffect(() => {
        
        try {
            api.get('/categoria',{}).then(res => {
                console.log(res.data);
                setCategorias(res.data.categorias.estabelecimento.name);
                // res.data.cidades.map( )
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
                categorias === null ? 
                
                <FlatList
                    data={"carregando"}
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
                :
                    <FlatList
                        data={categorias}
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
            }

        </View>
    );
}