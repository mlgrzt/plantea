import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SettingsNavigator } from "./settings.navigator";
import { FavouriteNavigator } from "./favourite.navigator";
import { PlantsNavigator } from "./plants.navigator";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Search: "search",
  Favourite: "md-heart-outline",
  Calendar: "calendar",
  Garden: "md-list",
  Settings: "md-settings",
};

const Calendar = () => (
  <SafeArea>
    <Text>Calendar</Text>
  </SafeArea>
);
const Garden = () => (
  <SafeArea>
    <Text>Gardens</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={35} color={color} />
    ),
  };
};
export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "#F4D06D",
      inactiveTintColor: "#C3D578",
      showLabel: false,
      style: {
        height: 66,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
      },
    }}
  >
    <Tab.Screen name="Search" component={PlantsNavigator} />
    <Tab.Screen name="Calendar" component={Calendar} />
    <Tab.Screen name="Garden" component={Garden} />
    <Tab.Screen name="Favourite" component={FavouriteNavigator} />
    <Tab.Screen name="Settings" component={SettingsNavigator} />
  </Tab.Navigator>
);
