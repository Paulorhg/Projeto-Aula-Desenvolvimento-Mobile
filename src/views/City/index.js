import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from '@expo/vector-icons';

import DropDownPicker from 'react-native-dropdown-picker';


import styles from "./styles";

export default function City() {

    const navigation = useNavigation();

    function navigateToCategoria(){
        navigation.navigate('Categoria');
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.textHeader}>CIDADE</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Escolha a cidade</Text>

                <DropDownPicker
                    items={[
                        {label: 'Sorocaba', value: 'sorocaba'},
                        {label: 'São Paulo', value: 'são paulo'},
                        {label: 'Campinas', value: 'campinas'},
                    ]}
                    defaultValue={'Sorocaba'}
                    containerStyle={{height: 50, width: 200}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={() => { }}
                />

                <Button style={styles.button} title="Proximo" onPress={navigateToCategoria}/>
            </View>
        </View>
    );
}
