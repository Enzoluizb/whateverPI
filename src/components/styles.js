import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // style login
  containerLogin: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#2D4B73",
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
