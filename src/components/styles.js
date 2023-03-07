import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // style login e cadastro
  containerLogin: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#2D4B73",
    gap: 15,
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
    backgroundColor: "#D9B70D",
    height: 34,
    width: 222,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  label: {
    fontSize: 14,
    color: "#2D4B73",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  TextoEsqueceuSenha: {
    color: "#D9B70D",
    fontWeight: 600,
  },
  TextoNaoTemUmaConta1: {
    color: "white",
    fontWeight: 600,
    textAlign: "center",
  },
  TextoNaoTemUmaConta2: {
    color: "#D9B70D",
    fontWeight: 600,
    textAlign: "center",
    border: "2px solid #D9B70D",
    borderRadius: "12px",
    padding: 7,
    marginTop: 10,
  },
  linha: {
    width: "334px",
    height: "0px",
    left: "42px",
    border: "1px solid #C1C1C1",
  },
  textoPrimario: {
    color: "white",
    fontSize: 15,
    fontWeight: 500,
  },
  textoPrimarioCad: {
    color: "white",
    fontSize: 25,
    fontWeight: 500,
  },
  TextosRegistro: {
    gap: 30,
    color: "white",
    fontSize: 18,
    fontWeight: 500,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  TextosRegistro2: {
    gap: 30,
    color: "#D9B70D",
    fontSize: 18,
    fontWeight: 500,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  // style recuperar senha
  containerRecu: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2D4B73",
    fontFamily: "red rose",
    gap: 120
  },
  boxG: {
    margin: "50px 50px",
    backgroundColor: "#D9D9D9",
    width: 373,
    height: 450,
    borderRadius: 15,
    flex: 0.5,
    alignItems: "center"
  },
  textoG: {
    fontFamily: "red rose",
    textAlign: "center",
    marginTop: 30,
    fontSize: 27,
    fontWeight: "bold",
  },
  digG: {
    fontFamily: "red rose",
    marginTop: 60,
    margin: 30,
    fontSize: 27,
  },
  inputG: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    overflow:"hidden",
    height: 44,
    width: 341,
    margin: 12,
    backgroundColor: "#ECECEC",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    textDecorationLine: "none"
  },
  buttonG: {
    backgroundColor: "#F2F2F2",
    height: 34,
    width: 222,
    justifyContent: "center",
    alignItems: "center",
  },
  labelG: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  TextoNaoTemUmaConta3: {
    color: "#000000",
    fontWeight: 600,
    textAlign: "center",
    border: "2px solid #000000",
    borderRadius: "12px",
    padding: 7,
    marginTop: 10,
  },

  //style do perfil
  perfil: {
    color: "white",
    backgroundColor: "#2D4B73",
    flex: 1,
    alignItems: "center",
    gap: 89,
  },
  perfil2: {
    color: "white",
    fontFamily: "Red Rose",
    fontSize: 23,
  },
  buttonSalvar: {
    backgroundColor: "#ECECEC",
    height: 34,
    width: 222,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    color: "black",
  },
  labelSalvar: {
    fontSize: 14,
    color: "#2D4B73",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  inputSalvar: {
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

  //foto perfil
  imgPerfil: {
    width: 80,
    height: 80,
    borderRadius: 90,
    marginLeft: 65,
  },
  FotoTexto: {
    gap: 10,
    backgroundColor: "#ECECEC",
    maxHeight: "500px",
    flex: 0.3,
    flexDirection: "row",
    width: "400px",
    alignItems: "center",
  },
  Perfilnome: {
    fontFamily: "Red Rose",
    color: "black",
    fontSize: 22,
  },

  // style historico
  containerHistorico: {
    backgroundColor: "#2D4B73",
    flex: 1,
    gap: 25,
  },
  historico: {
    color: "white",
    backgroundColor: "#ECECEC",
    flex: 1,
    gap: 20,
    padding:20,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  historicoTest: {
    color: "white",
    backgroundColor: "#ECECEC",
    flex: 1,
    gap: 20,
    padding:20,
    flexDirection: 'column',
     alignItems: 'flex-start'
  },
  textoHistorico: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    fontFamily: "Red Rose",
    marginTop: 10
  },
  gap:{
    gap:20
  },
  linhaH: {
    width: "434px",
    height: "0px",
    left: "42px",
    border: "1px solid #C1C1C1",
  },
  textoH: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 13,
  }
});
