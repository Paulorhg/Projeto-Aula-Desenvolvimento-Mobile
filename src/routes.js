import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import City from "./views/City";
import Categoria from "./views/Categoria";
import Lista from "./views/Lista";
import Detalhes from "./views/Detalhes";
import Reserve from "./views/Reserve";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="City" component={City} />
        <AppStack.Screen name="Categoria" component={Categoria} />
        <AppStack.Screen name="Lista" component={Lista} />
        <AppStack.Screen name="Detalhes" component={Detalhes} />
        <AppStack.Screen name="Reserve" component={Reserve} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}