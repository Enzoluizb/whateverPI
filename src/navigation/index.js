import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { PerfilScreen } from "../screens/PerfilScreen";
import HistoricoScreen from "../screens/HistoricoScreen";
import EventosDoDiaScreen from "../screens/EventosDoDiaScreen";

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Drawer"} component={MyDrawer} />
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"Perfil"} component={PerfilScreen} />
        <Stack.Screen name={"Historico"} component={HistoricoScreen} />
        <Stack.Screen name={"EventosDoDia"} component={EventosDoDiaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Página inicial" component={HomeScreen} />
      <Drawer.Screen name="Perfil" component={PerfilScreen} />
      <Drawer.Screen name="Histórico" component={HistoricoScreen} />
      <Drawer.Screen name="Eventos do dia" component={EventosDoDiaScreen} />
    </Drawer.Navigator>
  );
}