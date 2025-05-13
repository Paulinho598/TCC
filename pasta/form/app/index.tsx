import { BackHandler, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <form action="get" style={styles.form}>
        <Text style={styles.title}>Oi</Text>

        <View style={styles.container}>
          <View style={styles.items}>
            <label htmlFor="nome">var1:</label>
            <input type="text" name="nome" id="nome"/>
          </View>

          <View style={styles.items}>
            <label htmlFor="nome">var2:</label>  
            <input type="text" name="nome" id="nome"/>
          </View>

          <View style={styles.items}>
            <label htmlFor="nome">var3:</label>  
            <input type="text" name="nome" id="nome"/>
          </View>

          <View style={styles.items}>
            <label htmlFor="nome">var4:</label>  
            <input type="text" name="nome" id="nome"/>
          </View>

          <View style={styles.items}>
            <label htmlFor="nome">var5:</label>  
            <input type="text" name="nome" id="nome"/>
          </View>
        </View>
    </form>
  );
}

const styles = StyleSheet.create({
  title:{

  },
  form:{
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  container: {
    gap: 5,
    flex: 1,
    flexDirection: "column",
  },
  items: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  }
})