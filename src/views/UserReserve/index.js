import React, { useEffect, useState, useContext} from 'react';
import { View, Text, TouchableOpacity,FlatList, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AuthContext from '../../contexts/auth';
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api';

import styles from "./styles";

export default function UserReserve({route}) {

    const navigation = useNavigation();

    const [reserva, setReserva] = useState();
    const [reservas, setReservas] = useState([]);

    function navigateToReserve(){
        navigation.navigate('Reserve');
    }

     useEffect(() => {
        try {
            api.get('/reserva',{}).then(res => {
                console.log("///////////////////////////////////////" + res.data);
                setReservas(res.data.reservas);
                 console.log(reservas);
            })
        } catch (error) {
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity 
                onPress={() => navigateToReserve()}
                style={styles.returnButton}
            >
                <AntDesign name="left" size={24} color="#fff" />
            </TouchableOpacity>
                <Text style={styles.textHeader}>Reservas</Text>
            </View>
            {
                reservas.length === 0 ? <></>
                
                :

                <FlatList
                    data={reservas}
                    style={styles.estabelecimentos}
                    numColumns={1}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity 
                                onPress={() => navigateToDetails(item)}
                            >
                                {console.log(reservas)}
                                <View style={styles.estabelecimento} >
                                    <Text style={styles.textList}>{item.estabelecimento.nome}</Text>
                                    <Text style={styles.textList}>{item.date}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            }
        </View>
    );
}