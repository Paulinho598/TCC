import CheckBox from "expo-checkbox";
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as ImagePicker from 'expo-image-picker'
import { Picker } from '@react-native-picker/picker';
import { Link, router, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from "react-native";

export default function Etapa4(){
    const prosseguir = () => {
      if (!data || !peso || !altura) {
        Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos!");
        return;
      }

      if (data.length !== 10) {
        Alert.alert("Data inválida", "Por favor, insira uma data completa no formato DD/MM/AAAA");
        return;
      }

      const pesoNumero = parseFloat(peso.replace(',', '.'));
      if (isNaN(pesoNumero) || pesoNumero <= 0 || pesoNumero > 300) {
        Alert.alert("Peso inválido", "Por favor, insira um peso válido entre 1 e 300 kg");
        return;
      }

      const alturaNumero = parseInt(altura);
      if (isNaN(alturaNumero) || alturaNumero <= 0 || alturaNumero > 250) {
        Alert.alert("Altura inválida", "Por favor, insira uma altura válida entre 1 e 250 cm");
        return;
      }

      console.log("Data:", data);
      console.log("Peso:", peso, "kg");
      console.log("Altura:", altura, "cm");
      console.log("Imagem:", imagem);
      
      alert("Pão de Batata")
      //router.replace("/proxima-etapa");
  }

  const [imagem, setImagem] = useState<string | null>(null)

  const pickImage = async() => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images','videos'],
      allowsEditing: true,
      aspect: [4,3],
      quality: (1),
    })

    console.log(resultado)

    if(!resultado.canceled){
      setImagem(resultado.assets[0].uri)
    }
  }

  const [data, setData] = useState("")
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")

  const formatarData = (texto) => {
    let números = texto.replace(/\D/g, "")

    if(números.length <= 2){
      setData(números)
    }else if(números.length <= 4){
      setData(`${números.slice(0,2)}/${números.slice(2)}`)
    }else if(números.length <= 8){
      setData(`${números.slice(0, 2)}/${números.slice(2, 4)}/${números.slice(4, 8)}`)
    }else{
      setData(`${números.slice(0, 2)}/${números.slice(2, 4)}/${números.slice(4, 8)}`)
    }
  }

  const formatarKG = (texto) => {
    let pesoNumérico = texto.replace(/[^\d,.]/g, "")
    setPeso(pesoNumérico)
  }

  const formatarCM = (texto) => {
    let alturaNumérica = texto.replace(/\D/g, "")
    setAltura(alturaNumérica)
  }

  const handleSubmit = () =>{
    console.log("Data:",data)
    console.log("Peso:",peso)
    console.log("Altura:",altura)
    console.log("Imagem:",imagem)
  }

  return(
    <View style={estilo.container}>
      <View style={estilo.bloco}>
        <TouchableOpacity style={estilo.conjuntoImg} onPress={pickImage}>
          <Image
            style={estilo.img}
            source={imagem ? { uri: imagem } : require('./img/proxy-image.jpg')}
          />
        </TouchableOpacity>

        <View style={estilo.conjunto}>
          <Text style={estilo.etiqueta}>Data de Nascimento:</Text>
          <TextInput
            value={data}
            maxLength={10}
            style={estilo.input}
            onChangeText={formatarData}
            placeholder='DD/MM/AAAA'
            keyboardType='number-pad'
          />
        </View>

        <View style={estilo.conjunto}>
          <Text style={estilo.etiqueta}>Peso (kg):</Text>
          <TextInput
            value={peso}
            maxLength={6}
            style={estilo.input}
            keyboardType='numeric'
            onChangeText={formatarKG}
            placeholder='Insira seu peso em quilogramas'
          />
        </View>
        
        <View style={estilo.conjunto}>
          <Text style={estilo.etiqueta}>Altura (cm):</Text>
          <TextInput
            value={altura}
            maxLength={3}
            style={estilo.input}
            keyboardType='numeric'
            onChangeText={formatarCM}
            placeholder='Insira sua altura em centímetros'
          />
        </View>
        <View style={estilo.btnContainer}>
            <TouchableOpacity 
                style={estilo.button}
                onPressIn={() => {
                    prosseguir();
                }}>
                <Text style={estilo.buttonText}>AVANÇAR!</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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

  bloco:{
    flex: 1,
    alignItems: 'baseline',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  conjunto: {
    marginBottom: 10,
  },

  conjuntoImg: {
    marginLeft: 30,
    marginBottom: 50,
  },

  imageContainer: {
    marginBottom: 20,
  },

  input: {
    width: 250,
    padding: 5,
    borderWidth: 2,
    borderRadius: 20,
    textAlign: 'center',
    borderColor: "black",
    backgroundColor: "white",
  },

  etiqueta: {
    fontSize: 15,
    fontWeight: "bold",
  },

  img: {
    width: 200,
    height: 200,
    backgroundColor: "null"
  },

  btnContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  button: { 
    width: 160,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 30,
    backgroundColor: 'green',
  },
  
  buttonText: {
    padding: 5,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});