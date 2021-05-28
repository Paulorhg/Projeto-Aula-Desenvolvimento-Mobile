import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

import AuthContext from '../../contexts/auth';

import DropDownPicker from 'react-native-dropdown-picker';


import styles from "./styles";

export default function City() {

    const navigation = useNavigation();

    const { signed, user, signOut } = useContext(AuthContext);


    function navigateToCategoria(cat){

        console.log(value);
        navigation.navigate('Categoria',
        {cidade:value}
        );
    }

    const [ cidades, setCidades ] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Sorocaba', value: 'sorocaba'},
        {label: 'São Paulo', value: 'são paulo'},
        {label: 'Campinas', value: 'campinas'},
    ]);

    useEffect(() => {
        try {
            api.get('cidade',{}).then(res => {
                console.log(res.data);
                setCidades(res.data);
                // res.data.cidades.map( )
            })
        } catch (error) {
            
        }
        
    }, []);

    


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
            <View style={styles.content}>
                <Text style={styles.title}>Escolha a cidade</Text>

                <DropDownPicker
                    
                    open={open}
                    value={value}
                    items={cidades}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}


                    defaultValue={'Sorocaba'}
                    containerStyle={{height: 50, width: 200}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setValue(item.value)}
                    // onChangeItem={() => { setValue() }}
                />


                <Button style={styles.button} title="Proximo" onPress={navigateToCategoria}/>
            </View>
        </View>
    );
}