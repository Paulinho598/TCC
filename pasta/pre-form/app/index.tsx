import { Text, View, Image, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";
import { useState } from "react";

export default function Index() {
  const [isChecked, setChecked] = useState(false)


  return (
    <View style={estilo.container}>
        <Image
          source={require(`./img/54.png`)}
        />
        <Text>Dieta-se</Text>
        <Text>Zelando sempre por sua privacidade e segurança</Text>
        <View style={estilo.section}>
          <CheckBox
          value={isChecked}
          onValueChange={setChecked}/>
          <Text style={estilo.caixaTxt}>Estou de acordo com a Política de Privacidade e os Termos de Uso.</Text>
        </View>
        <View style={estilo.section}>
          <CheckBox
          value={isChecked}
          onValueChange={setChecked}/>
          <Text style={estilo.caixaTxt}>Autorizo o processamento dos meus dados pessoais de saúde para acessar os recursos da aplicação Dieta-se. Saiba mais na Política de Privacidade.</Text>
        </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32
  },

  section: {
    flexDirection: 'row',
      alignItems: 'center',
  },

  caixa: {
      margin: 8,
  },

  caixaTxt: {
    fontSize: 15,
    margin: 5
  },

})
