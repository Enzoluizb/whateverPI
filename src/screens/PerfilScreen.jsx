import { View,TextInput, Image } from "react-native"
import { Button } from "react-native-paper";
import { Text } from "react-native-web";
import { styles } from "../components/styles";

export const PerfilScreen = ({ navigation }) => {
    return (
        <View style={styles.perfil}>
            <View style={styles.FotoTexto}>
                <Image source={{ uri: "https://picsum.photos/200/200" }}
                style={styles.imgPerfil}>
                    
                </Image>
                <Text style={styles.Perfilnome}>User</Text>
            </View>
            <View>
                <Text style={styles.perfil2}>Alterar e-mail</Text>
                <TextInput label="Alterar e-mail" placeholder="Alterar e-mail"  style={styles.inputSalvar}></TextInput>
            </View>
            <View >
                <Text style={styles.perfil2}>Alterar senha</Text>
                <TextInput label="Alterar senha" placeholder="Alterar senha"  style={styles.inputSalvar}></TextInput>
            </View>
            <Button title="Salvar"  labelStyle={styles.labelSalvar}
        contentStyle={styles.buttonSalvar}>Salvar</Button>
        </View>
    )
}