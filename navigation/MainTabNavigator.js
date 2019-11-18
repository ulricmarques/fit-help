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
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      Icon={Icon.MaterialCommunityIcons}
      focused={focused}
      name="fire"
    />
  ),
}

const HistoryStack = createStackNavigator({
  History: HistoryScreen,
})

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="commenting-o" />
  ),
}

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.Feather} focused={focused} name="user" />
  ),
}

HomeStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  HistoryStack,
  ProfileStack
});

tabNavigator.path = '';

export default tabNavigator;
