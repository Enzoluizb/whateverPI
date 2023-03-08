import "firebase/auth";
import { Text, View } from "react-native";
import { styles } from "../components/styles";
import { useState } from "react";
import { getData } from "../utils/GetSetData";

export const HomeScreen = () => {
  const [user, setUser] = useState({
    displayName: "Ainda não teve a promessa",
  });

  const userData = getData("user").then((data) => {
    setUser(data);
  });

  return (
    <View>
      <Text>Bem-vindo {user.displayName} {/* {user.email} */}</Text>
      {/* <Text>Bem-vindo </Text> */}
    </View>
  );
};

export default HomeScreen;
