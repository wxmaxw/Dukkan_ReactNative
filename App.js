import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './src/pages/Products/Product';
import Detail from './src/pages/Detail';


const Stack = createNativeStackNavigator();

function App() {
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='ProductPage' 
        component={Products} 
        options={{
          title:"Dükkan",
          headerStyle: {backgroundColor: "#64b5f6"},
          headerTitleStyle: {color: 'white'},
          headerTitleAlign:"center",
        }}
        
        />
        <Stack.Screen 
        name='DetailPage' 
        component={Detail}
        options={{
          title:"Detail",
          headerStyle: {backgroundColor: "#B175E8"},
          headerTitleStyle: {color: 'white'},
          headerTitleAlign:"center",
          headerTintColor: "white",
          
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

export default App;



