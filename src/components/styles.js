import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 50,
        backgroundColor: "#2D4B73"
    },
    imgLogo: {
        minWidth: "200px",
        minHeight: "200px",
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
})