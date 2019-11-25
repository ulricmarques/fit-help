import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import * as Icon from '@expo/vector-icons'

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: { headerLayoutPreset: 'center',},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Exercises',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      Icon={Icon.MaterialCommunityIcons}
      focused={focused}
      name="dumbbell"
    />
  ),
}

const HistoryStack = createStackNavigator(
  {
    History: HistoryScreen,
  },
  {
    headerLayoutPreset: 'center'
  }
);

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.MaterialCommunityIcons} focused={focused} name="chart-bar" />
  ),
}

const ProfileStack = createStackNavigator(
  {
  Profile: ProfileScreen,
  },
  {
    headerLayoutPreset: 'center'
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.MaterialCommunityIcons} focused={focused} name="account" />
  ),
}

HomeStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  HistoryStack,
  ProfileStack
}, {
  tabBarOptions: {
    style: { backgroundColor: '#00AFB9' },
  }
});

tabNavigator.path = '';

export default tabNavigator;
