import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import { Button, HelperText } from "react-native-paper";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../components/firebase";
import { styles } from "../components/styles.js";

export const ForgotPasswordScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });

  const [mostraErro, setMostraErro] = useState("");
  const { mensagem } = route.params || false;

  function onForgotPressed() {
    // forgor password using Firebase Auth
    sendPasswordResetEmail(auth, email.value)
      .then(() => {
        setMostraErro("Email enviado com sucesso");
      })
      .catch((error) => {
        setMostraErro(error.message);
      });
  }

  function lidarComErro(erro) {
    if (erro == "auth/wrong-password") {
      setMostraErro("Senha errada 😕");
      return;
    }
    if (erro == "auth/user-not-found") {
      setMostraErro("Usuário não encontrado 😕");
      return;
    }
    if (erro == "auth/invalid-email") {
      setMostraErro("E-mail inválido 😕");
      return;
    }
    setMostraErro(erro);
  }

  return (
    <View style={styles.containerRecu}>
      <Text style={styles.Logo}>whatever</Text>
      <View style={styles.boxG}>
        <Text style={styles.textoG}>Recuperar senha</Text>
        <Text style={styles.digG}>Digite seu e-mail</Text>
        {mensagem && <HelperText type="info">{mensagem}</HelperText>}
        <HelperText type="error">{mostraErro}</HelperText>
        <TextInput
          style={styles.inputG}
          label="Digite seu E-mail"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          /* não essenciais  */
          returnKeyType="next"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
        />
        <HelperText visible={!!email.error}>{email.error}</HelperText>
        <Button labelStyle={styles.labelG} contentStyle={styles.buttonG}>
          Enviar
        </Button>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.TextoNaoTemUmaConta3}>Fazer login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
