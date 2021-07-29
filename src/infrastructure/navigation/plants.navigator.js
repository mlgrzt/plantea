import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { PlantsScreen } from "../../features/screens/plants.screen";
import { PlantDetailScreen } from "../../features/screens/plant-detail.screen";
import { PlantsSearchScreen } from "../../features/screens/plantsSearch.screen";

const PlantStack = createStackNavigator();

export const PlantsNavigator = () => {
  return (
    <PlantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
      initialRouteName="PlantsSearch"
    >
      <PlantStack.Screen name="PlantsSearch" component={PlantsSearchScreen} />
      <PlantStack.Screen name="Plants" component={PlantsScreen} />
      <PlantStack.Screen name="PlantsDetail" component={PlantDetailScreen} />
    </PlantStack.Navigator>
  );
};
