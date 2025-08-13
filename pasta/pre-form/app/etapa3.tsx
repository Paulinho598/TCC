import { useState } from "react";
import CheckBox from "expo-checkbox";
import { Picker } from '@react-native-picker/picker';
import { Link, router, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Etapa3(){
    const [isChecked1, setChecked1] = useState(false)
    const [isChecked2, setChecked2] = useState(false)
    const [isChecked3, setChecked3] = useState(false)
    const [isChecked4, setChecked4] = useState(false)
    const [isChecked5, setChecked5] = useState(false)
    const [isChecked6, setChecked6] = useState(false)
    const [isChecked7, setChecked7] = useState(false)
    const [isChecked8, setChecked8] = useState(false)
    const [isChecked9, setChecked9] = useState(false)
    const [isChecked10, setChecked10] = useState(false)
    const [isChecked11, setChecked11] = useState(false)
    const [isChecked12, setChecked12] = useState(false)
    const [selectedValue, setSelectedValue] = useState("none")
    const [showPicker, setShowPicker] = useState(false)
    const router = useRouter()

    function prosseguir(){
        if(isChecked1 == true && isChecked2 == true){
            router.replace('/etapa2')
        }else if(isChecked1 == true || isChecked2 == true){
            alert("É NECESSÁRIO ACEITAR TODOS ACIMA!")
        }else{
            alert("PARA CONTINUARES, É NECESSÁRIO ACEITAR TODOS ACIMA!")
        }
    }

    return(
        <View style={estilo.container}>
            <View>
                <Text style={estilo.title}>VOCÊ POSSUI ALGUMA DOENÇA OU RESTRIÇÃO ALIMENTAR?</Text>
            </View>

            <View style={estilo.checkboxContainer}>
                <CheckBox
                value={isChecked1}
                onValueChange={(newValue) =>{
                    setChecked1(newValue)
                    if(!newValue){
                        setChecked2(false)
                    }
                }}
                style={estilo.checkbox}
                />
                <Text style={estilo.checkboxText}>Sim, tenho</Text>
            </View>

            {isChecked1 && (
                <View>
                    <View style={estilo.checkboxContainerInside}>
                        <CheckBox
                            value={isChecked2}
                            onValueChange={setChecked2}
                            style={estilo.checkbox}
                        />
                        <Text style={estilo.checkboxText}>1</Text>
                    </View>
                    <View style={estilo.checkboxContainerInside}>
                        <CheckBox
                            value={isChecked3}
                            onValueChange={setChecked3}
                            style={estilo.checkbox}
                        />
                        <Text style={estilo.checkboxText}>2</Text>
                    </View>
                    <View style={estilo.checkboxContainerInside}>
                        <CheckBox
                            value={isChecked4}
                            onValueChange={setChecked4}
                            style={estilo.checkbox}
                        />
                        <Text style={estilo.checkboxText}>3</Text>
                    </View>
                </View>
            )}
            
            <View style={estilo.checkboxContainer}>
                <CheckBox
                value={isChecked5}
                onValueChange={(newValue) =>{
                    setChecked5(newValue)
                    if(!newValue){
                        setChecked6(false)
                    }
                }}
                style={estilo.checkbox}
                />
                <Text style={estilo.checkboxText}>Sim, tenho</Text>
            </View>

            {isChecked5 && (
                <View>
                    <View style={estilo.checkboxContainer}>
                        <CheckBox
                            value={isChecked6}
                            onValueChange={setChecked6}
                            style={estilo.checkbox}
                        />
                        <Text style={estilo.checkboxText}>1</Text>
                    </View>
                    <View style={estilo.checkboxContainer}>
                        <CheckBox
                            value={isChecked7}
                            onValueChange={setChecked7}
                            style={estilo.checkbox}
                        />
                        <Text style={estilo.checkboxText}>2</Text>
                    </View>
                    <View style={estilo.checkboxContainer}>
                        <CheckBox
                            value={isChecked8}
                            onValueChange={setChecked8}
                            style={estilo.checkbox}
                        />
                        <Text style={estilo.checkboxText}>3</Text>
                    </View>
                </View>
            )}
            <View style={estilo.checkboxContainer}>
                <CheckBox
                value={isChecked9}
                onValueChange={(newValue) =>{
                    setChecked9(newValue)
                    if(!newValue){
                        setChecked10(false)
                    }
                }}
                style={estilo.checkbox}
                />
                <Text style={estilo.checkboxText}>Sim, tenho</Text>
            </View>

            {isChecked9 && (
                <View>
                    <View style={estilo.checkboxContainer}>
                        <CheckBox
                            value={isChecked10}
                            onValueChange={setChecked10}
                            style={estilo.checkbox}
                        />
                        <Text style={estilo.checkboxText}>1</Text>
                    </View>
                    <View style={estilo.checkboxContainer}>
                        <CheckBox
                            value={isChecked11}
                            onValueChange={setChecked11}
                            style={estilo.checkbox}
                        />
                        <Text style={estilo.checkboxText}>2</Text>
                    </View>
                    <View style={estilo.checkboxContainer}>
                        <CheckBox
                            value={isChecked12}
                            onValueChange={setChecked12}
                            style={estilo.checkbox}
                        />
                        <Text style={estilo.checkboxText}>3</Text>
                    </View>
                </View>
            )}
        </View>
    )
};

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        borderWidth: 2,
        borderRadius: 20,
        marginVertical: 32,
        alignItems: 'center',
        marginHorizontal: 16,
        backgroundColor: '#E0F7E9',
    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },

    checkboxContainer: {
        width: '100%',
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    checkbox: {
        marginTop: 3,
        marginRight: 10,
        borderRadius: 30,
    },

    checkboxText: {
        flex: 1,
    },
});