import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { signIn } from '../../services/auth';
import AuthContext from '../../contexts/auth';

import styles from "./styles";

export default function Login() {
    const { signed, user, signIn } = useContext(AuthContext);

    console.log(signed);
    console.log(user);

    const navigation = useNavigation();

    async function Logar(){

        const response = await signIn();

        // console.log(response);

        // navigation.navigate('City');
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>LOGIN</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Email</Text>

                <Text style={styles.title}>Senha</Text>


                <Button style={styles.button} title="Login" onPress={Logar}/>
            </View>
        </View>
    );
}