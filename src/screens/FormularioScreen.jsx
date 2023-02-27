import { Button, Text, View } from "react-native"
import { TextInput } from "react-native-paper";
import { styles } from "../components/styles";
import { Image } from 'react-native-web';

export const FormularioScreen = ({ navigation }) => {
    return (
        <View style={styles.formulario}>
            <Text>Formulario</Text>
            <Image
                source={{ uri: require("../../assets/image.png") }}
                style={{ width: 100, height: 100, marginBottom: 20 }}
                resizeMode="contain"/>

            <TextInput label="Seu nome"></TextInput>
            <TextInput label="Gmail"></TextInput>
            <TextInput label="Senha"></TextInput>
            <Button title='enviar'/>
            <Button title="volte" onPress={() => navigation.navigate("Home")}
            ></Button>

        </View>
    )
}