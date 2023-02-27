import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormularioScreen } from "../screens/FormularioScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Drawer"} component={MyDrawer} />
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"Formulario"} component={FormularioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="formulario" component={FormularioScreen} />
    </Drawer.Navigator>
  );
}