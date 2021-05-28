import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';


const AuthContext = createContext({ signed: false, user:{} });

export function AuthProvider({children}){

    const[user, setUser] = useState(null);

    useEffect(() => {
        async function localStorageData(){
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            if(storagedUser && storagedToken){
                api.defaults.headers.Authorization = `Bearer ${storagedTokentoken}`;

                setUser(JSON.parse(storagedUser));
            }
        }
        localStorageData();
    }, []);


    async function signIn(email, senha){
        console.log("passou context");
        const response = await auth.signIn(email, senha);

        setUser(response.user);

        api.defaults.headers.Authorization = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
    }

    async function signOut(){
        AsyncStorage.clear().then(()=>{
            setUser(null);
        })        
    }

    return(

        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    
    );
}

export default AuthContext;