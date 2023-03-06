import { Button, Text, View } from "react-native";
import { styles } from "../components/styles";
import firebase from 'firebase/app';
import 'firebase/auth';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
    </View>
  );
};

export default firebase;