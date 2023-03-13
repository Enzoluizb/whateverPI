import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../components/styles";

export default function EventosDoDiaScreen() {
  return (
    <View style={styles.containerEventos}>
      <Text style={styles.tituloEventos}>Eventos do Dia</Text>
    </View>
  );
}