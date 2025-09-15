import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import CheckBox from "expo-checkbox";
import * as ImagePicker from 'expo-image-picker'
import { Picker } from '@react-native-picker/picker';
import { Link, router, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function Etapa4(){
  return(
    <View style={estilo.container}>
      <View>

      </View>
      <View style={estilo.bloco}>
      <Text style={estilo.etiqueta}>Nome:</Text>
      <TextInput
        style={estilo.input}
      />
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

  imageContainer: {
    marginBottom: 20,
  },

  input: {
    width: 250,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "black",
    backgroundColor: "white"
  },

  etiqueta: {
    fontSize: 20,
    fontWeight: "bold",
  },
  
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  img: {
    width: 200,
    height: 200,
    backgroundColor: "null"
  },
  
  textContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  
  title: {
    fontSize: 50,
    color: 'green',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    textAlign: 'center',
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

  button: {
    width: '100%',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'green',
  },
  
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },

  link: {
    color: 'green',
  }
});