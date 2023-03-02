import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // style login
  containerLogin: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#2D4B73",
    gap: 15
  },
  Logo: {
    fontFamily: "Red Rose",
    color: "#D9B70D",
    fontSize: 30,
    fontWeight: 400,
  },
  inputLogin: {
    height: 34,
    width: 222,
    borderRadius: "10px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
    padding: "3px",
    border: "none",
    backgroundColor: "#ECECEC",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  button: {
    backgroundColor: '#D9B70D',
    height: 34,
    width: 222,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  label: {
    fontSize: 14,
    color: '#2D4B73',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  TextoEsqueceuSenha: {
     color: '#D9B70D',
     fontWeight: 600,
  },
  TextoNaoTemUmaConta1: {
    color: 'white',
    fontWeight: 600,
    textAlign: "center",
  },
  TextoNaoTemUmaConta2: {
    color: '#D9B70D',
    fontWeight: 600,
    textAlign: "center",
    border: "2px solid #D9B70D",
    borderRadius: "12px",
    padding: 7,
    marginTop: 10
  },
  linha: {
    width: '334px',
    height: '0px',
    left: '42px',
    border: '1px solid #C1C1C1'
  },
  textoPrimario: {
    color: 'white',
    fontSize: 15,
    fontWeight: 500
  },





  // style recuperar senha
  box: {
    marginTop: 150,
    backgroundColor: "#D9D9D9",
    width: 373,
    height: 450,
    borderRadius: 15,
  },
  texto: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 27,
    fontWeight: "bold",
  },
  dig: {
    marginTop: 60,
    margin: 30,
    fontSize: 27,
  },
  input: {
    height: 44,
    width: 341,
    margin: 12,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "white",
  },
  botao: {
    backgroundColor: "#F2F2F2",
    height: 50,
    width: 245,
  },
});
