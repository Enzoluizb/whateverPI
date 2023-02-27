import { Button, Image, View } from "react-native"
import { TextInput } from "react-native-paper";
import { styles } from "../components/styles";

export const PerfilScreen = ({ navigation }) => {
    return (
        <View style={styles.formulario}>
            <Image
                source={{ uri: "https://picsum.photos/200/200" }}
                style={styles.imgLogo}
            ></Image>
            <TextInput label="Alterar e-mail"></TextInput>
            <TextInput label="Alterar senha"></TextInput>
            <Button title="Alterar"></Button>
        </View>
    )
}