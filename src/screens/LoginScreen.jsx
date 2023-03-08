import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import { Button, HelperText } from "react-native-paper";
import { auth } from "../components/firebase";
import { styles } from "../components/styles";
// Importe o módulo de autenticação do Firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../components/styles.css";
import { storeData } from "../utils/GetSetData";

export const LoginScreen = ({ route, navigation }) => {
  // Crie uma instância do provedor de autenticação do Google
  const provider = new GoogleAuthProvider();

  // Crie uma função para realizar o login com o Google
  function signInWithGoogle() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // O usuário fez login com o Google com sucesso
        const user = result.user;
        storeData("user", user);
        navigation.navigate("Drawer");
      })
      .catch((error) => {
        // Ocorreu um erro ao fazer login com o Google
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });
  const [mostraErro, setMostraErro] = useState("");
  const { mensagem } = route.params || false;

  function onLoginPressed() {
    console.log("LoginIniciado");
    if (email.value === "" || password.value === "") {
      setEmail({ ...email, error: "Entre com um e-mail válido" });
      setPassword({ ...password, error: "Entre com uma senha" });
      return;
    }
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Drawer");
      })
      .catch((error) => {
        lidarComErro(error.code);
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
    <View style={styles.containerLogin}>
      <Text style={styles.Logo}>whatever</Text>
      <Text style={styles.linha} />
      <Text style={styles.textoPrimario}>
        Para continuar, faça login no whatever
      </Text>
      {mensagem && <HelperText type="info">{mensagem}</HelperText>}
      <HelperText type="error">{mostraErro}</HelperText>
      <button className="google-button" onClick={() => signInWithGoogle()}>
        Entrar com o Google
      </button>
      <Text />
      <Text style={styles.linha} />
      <TextInput
        label="e-mail"
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
        placeholder="e-mail"
      />
      <HelperText visible={!!email.error}>{email.error}</HelperText>
      <TextInput
        label="senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        style={styles.inputLogin}
        placeholder="senha"
      />
      <Button
        mode="contained"
        labelStyle={styles.label}
        contentStyle={styles.button}
        onPress={onLoginPressed}
      >
        Log in
      </Button>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={styles.TextoEsqueceuSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.linha} />
      <View>
        <Text style={styles.TextoNaoTemUmaConta1}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.TextoNaoTemUmaConta2}>
            Criar conta no whatever
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.linha} />
    </View>
  );
};
