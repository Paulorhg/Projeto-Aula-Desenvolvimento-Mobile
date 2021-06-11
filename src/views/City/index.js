import React, {useState, useContext, useEffect} from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api';

import AuthContext from '../../contexts/auth';

import DropDownPicker from 'react-native-dropdown-picker';


import styles from "./styles";

export default function City() {

    const navigation = useNavigation();

    const { signed, user, signOut } = useContext(AuthContext);

    const [ cidades, setCidades ] = useState([]);
    const [value, setValue] = useState();
    const [items, setItems] = useState([]);

    function navigateToCategoria(cat){

        console.log(value);
        navigation.navigate('Categoria',
            {cidade:value}
        );
    }

    useEffect(() => {
        try {
            api.get('cidade',{}).then(res => {
                console.log(res.data.cidades);
                setCidades(res.data.cidades);
            })
        } catch (error) {
        }
    }, []);

    useEffect(() => {
        cidades.map(cidade => {
            console.log(cidade.name)
            var item ={
                label: cidade.name,
                value: cidade._id
            }
            setItems(items => [...items, item])
        })
    }, [cidades])

    function handleSignOut(){
        signOut();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity 
                    onPress={() => handleSignOut()}
                    style={styles.buttomLogout}
                    >
                    <AntDesign name="poweroff" size={24} color="#fff" />
                </TouchableOpacity>
            <Text style={styles.textHeader}>
                CIDADE</Text>
            </View>

            {
                items.length === 0 ? <></>
                :
                <View style={styles.content}>

                    <Text style={styles.title}>Escolha a cidade</Text>

                    <DropDownPicker
                        items={items}
                        defaultValue={'Cidade'}
                        containerStyle={{height: 50, width: 200}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => setValue(item.value)}
                    />
                    
                    <Button style={styles.button} title="Proximo" onPress={navigateToCategoria}/>
                </View>
            }
        </View>
    );
}