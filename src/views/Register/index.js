import React, {useState, useContext} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import AuthContext from '../../contexts/auth';

import styles from "./styles";

export default function Register() {
    const { signed, user, register } = useContext(AuthContext);

    console.log(signed);
    console.log(user);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    async function Cadastrar(){
        console.log(email);
        const response = await register(email, senha);
       
    }

    function navigateToLogin(){
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => navigateToLogin()}
                    style={styles.returnButton}
                >
                    <AntDesign name="left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Cadastro</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                />


                <Text style={styles.title}>Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text=> setSenha(text)}
                />

                <Button style={styles.button} title="Cadastrar" onPress={() => Cadastrar()}/>
            </View>
        </View>
    );
}