import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
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
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.texto}>Recuperar senha</Text>
        <Text style={styles.dig}>Digite seu e-mail</Text>

        {mensagem && <HelperText type="info">{mensagem}</HelperText>}
        <HelperText type="error">{mostraErro}</HelperText>

        <TextInput
          style={styles.input}
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
        />

        <HelperText visible={!!email.error}>{email.error}</HelperText>

        <View style={styles.esqueceuSenha}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.label}>Fazer login?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={onForgotPressed} style={styles.botao}>
          Login
        </Button>
        <View style={styles.row}>
          <Text style={styles.label}>Não possui uma conta? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.link}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
