import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../components/styles";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.formulario}>
      <Text>Home page</Text>
      <Button
        title="Ir para o Formulario"
        onPress={() => navigation.navigate("Formulario")}
      >FORMULARIO</Button>
    </View>
    
   
  );
};