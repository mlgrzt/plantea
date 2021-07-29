import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { FavouriteScreen } from "../../features/screens/favourite.screen";

const PlantStack = createStackNavigator();

export const FavouriteNavigator = () => {
  return (
    <PlantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
      initialRouteName="Favourite"
    >
      <PlantStack.Screen name="Favourite" component={FavouriteScreen} />
    </PlantStack.Navigator>
  );
};
