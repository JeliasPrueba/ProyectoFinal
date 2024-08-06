import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IncidencesScreen from "./src/screens/IncidencesScreen"
import IncidenceDetailScreen from "./src/screens/IncidenceDetailScreen"
import AboutScreen from "./src/screens/AboutScreen"
import Login from "./src/screens/Sesion"
import CreateIncidenceScreen from "./src/screens/CreateIncidenceScreen"
import RegisterVisitScreen from "./src/screens/RegisterVisitScreen"
import News from "./src/screens/News"
import CentrosScreen from "./src/screens/CentrosScreen"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: 'blue',
          background: 'white',
          card: 'green',
          text: 'black',
        },
      }}
    >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Incidences" component={IncidencesScreen} />
        <Stack.Screen name="IncidenceDetail" component={IncidenceDetailScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="RegisterVisit" component={RegisterVisitScreen} />
        <Stack.Screen name="CreateIncidenceScreen" component={CreateIncidenceScreen} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Centros" component={CentrosScreen} />
        {/* Agrega más pantallas aquí */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
