import React, {useState, useContext} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { signIn } from '../../services/auth';
import AuthContext from '../../contexts/auth';

import styles from "./styles";

export default function Login() {
    const { signed, user, signIn } = useContext(AuthContext);

    console.log(signed);
    console.log(user);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    async function Logar(){
        console.log(email);
        const response = await signIn(email, senha);
       
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>LOGIN</Text>
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

                <Button style={styles.button} title="Login" onPress={Logar}/>
            </View>
        </View>
    );
}