import { Button, Image, View } from "react-native"
import { TextInput } from "react-native-paper";
import { Text } from "react-native-web";
import { styles } from "../components/styles";

export const PerfilScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://picsum.photos/200/200" }}
                style={styles.imgLogo}
            ></Image>
            <View>
                <Text>Alterar e-mail</Text>
                <TextInput label="Alterar e-mail"></TextInput>
            </View>
            <View>
                <Text>Alterar senha</Text>
                <TextInput label="Alterar senha"></TextInput>
            </View>
            <Button title="Salvar"></Button>
        </View>
    )
}