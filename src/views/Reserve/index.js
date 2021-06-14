import React, { useEffect, useState, useContext} from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AuthContext from '../../contexts/auth';
import api from '../../services/api';
import DateTimePicker from '@react-native-community/datetimepicker';

import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";

export default function Reserve({route}) {
    const {  user } = useContext(AuthContext);
    //console.log(user);
    const navigation = useNavigation();

    const {estabelecimento} = route.params;

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    async function navigateToReserve(){

        const data = {
            usuario: user._id,
            date: date,
            estabelecimento: estabelecimento._id
        }

        try {
            await api.post('reserva/', data).then(res => {
                console.log(res.data)
            });
        } catch (error) {
            
        }

        navigation.navigate('UserReserve');
    }

    function navigateToDetails(){
        navigation.navigate('Detalhes');
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        console.log(date)
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

    // useEffect(() => {
    //     try {
    //         api.get('/reserva',{}).then(res => {
    //             console.log(res.data);
    //             setReservas(res.data);
    //         })
    //     } catch (error) {
    //     }
    // }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => navigateToDetails()}
                    style={styles.returnButton}
                >
                    <AntDesign name="left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>{estabelecimento.nome}</Text>
            </View>
            <View style={styles.infos}>
                <View>
                    <View style={styles.btnDate}>
                        <AntDesign name="calendar" size={24} />
                        <Button onPress={showDatepicker} title="Escolher data" />
                        {/* <Text>{toString(date)}</Text> */}
                        
                    </View>
                    <View style={styles.btnDate}>
                        <AntDesign name="clockcircleo" size={24} />
                        <Button onPress={showTimepicker} title="Escolher horario" />
                    </View>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                </View>
                <Button title="Reservar" onPress={() => navigateToReserve()}></Button>
            </View>
        </View>
    );
}