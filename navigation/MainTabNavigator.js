import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import * as Icon from "@expo/vector-icons";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ExerciseScreen from "../screens/ExerciseScreen";
import HistoryScreen from "../screens/HistoryScreen";
import HistoryPerExerciseScreen from "../screens/HistoryPerExerciseScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileSecondScreen from "../screens/ProfileSecondScreen";
import Colors from "../constants/Colors";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: { headerLayoutPreset: "center" }
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Exercise: ExerciseScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Exercícios",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      Icon={Icon.MaterialCommunityIcons}
      focused={focused}
      name="dumbbell"
    />
  )
};

const HistoryStack = createStackNavigator(
  {
    History: HistoryScreen,
    HistoryPerExercise: HistoryPerExerciseScreen
  },
  {
    headerLayoutPreset: "center"
  }
);

HistoryStack.navigationOptions = {
  tabBarLabel: "Histórico",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      Icon={Icon.MaterialCommunityIcons}
      focused={focused}
      name="chart-bar"
    />
  )
};

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    ProfileSecond: ProfileSecondScreen
  },
  {
    headerLayoutPreset: "center"
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Perfil",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      Icon={Icon.MaterialCommunityIcons}
      focused={focused}
      name="account"
    />
  )
};

HomeStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    HistoryStack,
    ProfileStack
  },
  {
    tabBarOptions: {
      style: { backgroundColor: Colors.primary },
      activeTintColor: Colors.info,
      inactiveTintColor: Colors.dark,
      labelStyle: {
        fontSize: 15
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
