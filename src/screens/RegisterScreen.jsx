import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import { Button, HelperText } from "react-native-paper";
import { auth } from "../components/firebase";
import { styles } from "../components/styles";

export const RegisterScreen = ({ navigation }) => {
  const [mostraErro, setMostraErro] = useState("");
  const [nome, setNome] = useState({
    value: "",
    error: "",
  });
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });
  const [confirmaPassword, setConfirmaPassword] = useState({
    value: "",
    error: "",
  });

  function onRegisterPressed() {
    console.log("RegistroIniciado");
    let erro = false;
    if (nome.value === "") {
      setNome({ ...nome, error: "Entre com o seu nome" });
      erro = true;
    }
    if (email.value === "") {
      setEmail({ ...email, error: "Entre com um e-mail válido" });
      erro = true;
    }
    if (password.value === "") {
      setPassword({ ...password, error: "Entre com uma senha" });
      erro = true;
    }
    if (confirmaPassword.value === "") {
      setConfirmaPassword({
        ...confirmaPassword,
        error: "Repita sua senha",
      });
      erro = true;
    }
    if (confirmaPassword.value != password.value) {
      erro = true;
      setConfirmaPassword({
        ...confirmaPassword,
        error: "Senhas não conferem",
      });
    }
    if (!erro) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((value) => {
          console.log("Cadastrado com sucesso! " + value.user.uid);
          navigation.navigate("LoginScreen", {
            mensagem: "Você se registrou com muito sucesso!",
          });
        })
        .catch((error) => lidarComErro(error.code));
    }
  }

  function lidarComErro(erro) {
    if (erro == "auth/weak-password") {
      setMostraErro("Senha muito Fraquinha");
      return;
    }
    if (erro == "auth/credential-already-in-use") {
      setMostraErro("E-mail já cadastrado");
      return;
    }
    if (erro == "auth/invalid-email") {
      setMostraErro("E-mail inválido");
      return;
    }
    setMostraErro(erro);
  }

  return (
    <View style={styles.containerLogin}>
      <Text style={styles.Logo}>whatever</Text>
      <Text style={styles.textoPrimarioCad}>Cadastro</Text>
      <Text style={styles.linha} />
      <HelperText type="error">{mostraErro}</HelperText>
      <TextInput
        label="Nome Completo"
        value={nome.value}
        onChangeText={(text) => setNome({ value: text, error: "" })}
        error={!!nome.error}
        errorText={nome.error}
        /* não essenciais  */
        returnKeyType="next"
        textContentType="givenName"
        keyboardType="default"
        style={styles.inputLogin}
        placeholder="Nome completo"
      />
      <HelperText type="error" visible={!!nome.error}>
        {nome.error}
      </HelperText>
      <TextInput
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
        style={styles.inputLogin}
        placeholder="Digite seu e-mail"
      />
      <HelperText type="error" visible={!!email.error}>
        {email.error}
      </HelperText>
      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        style={styles.inputLogin}
        placeholder="Digite sua senha"
      />
      <HelperText type="error" visible={!!password.error}>
        {password.error}
      </HelperText>
      <TextInput
        label="Confirme sua Senha"
        returnKeyType="done"
        value={confirmaPassword.value}
        onChangeText={(text) => setConfirmaPassword({ value: text, error: "" })}
        error={!!confirmaPassword.error}
        errorText={confirmaPassword.error}
        secureTextEntry
        style={styles.inputLogin}
        placeholder="Confirmar senha"
      />
      <br />
      <Text style={styles.linha} />
      <HelperText type="error" visible={!!confirmaPassword.error}>
        {confirmaPassword.error}
      </HelperText>
      <View style={styles.TextosRegistro}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={styles.TextosRegistro}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.TextosRegistro}>Já é usuário do whatever?</Text> <Text style={styles.TextosRegistro2}>Faça login</Text>
        </TouchableOpacity>
      </View>
      <Button
        mode="contained"
        labelStyle={styles.label}
        contentStyle={styles.button}
        onPress={onRegisterPressed}
      >
        Cadastrar
      </Button>
    </View>
  );
};
