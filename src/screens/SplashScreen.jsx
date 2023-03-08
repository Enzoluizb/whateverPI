import { useEffect } from "react";
import { Image, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { styles } from "../components/styles";
import { getData } from "../utils/GetSetData";

export function SplashScreen({ navigation }) {
  useEffect(() => {
    const user = getData("user").then((data) => {
      console.log(data);
      //   if (data.hasOwnProperty("displayName")) {
      if (typeof data === "object") {
        console.log("Usuário logado");
        setTimeout(navigation.navigate("Drawer"), 2000);
      } else {
        console.log("usuário não Logado");
        setTimeout(navigation.navigate("LoginScreen"), 2000);
        // navigation.navigate("LoginScreen");
      }
    });
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator />
      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
        style={styles.imgPerfil}
      />
    </View>
  );
}
