import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../components/styles";
import { CheckBox } from "react-native-elements";
import { useState } from "react";

export default function HistoricoScreen() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.containerHistorico}>
      <Text style={styles.textoHistorico}>Histórico</Text>
      <View>
        <View style={styles.gap}>
          <View style={styles.historico}>
            <View style={styles.historicoTest}>
            <Text style={styles.textoH}>Restaurante encontrados!</Text>
            <Text style={styles.textoH}>Dia 20/01/2023</Text>
            </View>
            <CheckBox
              title=""
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
          </View>
        </View>
        <Text style={styles.linhaH} />
        <View style={styles.historico}>
        <View style={styles.historicoTest}>
          <Text style={styles.textoH}>Eventos esportivos encontrados!</Text>
          <Text style={styles.textoH}>Dia 18/01/2023</Text>
          </View>
          <CheckBox
              title=""
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
        </View>
        <Text style={styles.linhaH} />
        <View style={styles.historico}>
        <View style={styles.historicoTest}>
          <Text style={styles.textoH}>Festas encontrados!</Text>
          <Text style={styles.textoH}>Dia 20/12/2023</Text>
          </View>
          <CheckBox
              title=""
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
        </View>
        <Text style={styles.linhaH} />
        <View style={styles.historico}>
        <View style={styles.historicoTest}>
          <Text style={styles.textoH}>Parques encontrados!</Text>
          <Text style={styles.textoH}>Dia 17/12/2023</Text>
          </View>
          <CheckBox
              title=""
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
        </View>
        <Text style={styles.linhaH} />
        <View style={styles.historico}>
        <View style={styles.historicoTest}>
          <Text style={styles.textoH}>Encontros esportivos não encontrados!</Text>
          <Text style={styles.textoH}>Dia 18/01/2023</Text>
          </View>
          <CheckBox
              title=""
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
        </View>
        <Text style={styles.linhaH} />
      </View>
    </View>
  );
}
