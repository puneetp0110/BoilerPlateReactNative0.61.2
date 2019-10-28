import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import UserInformation from 'app/features/userInformation/containers/UserContainer';
import Home from 'app/features/home/containers/HomeContainer';
import { View, Image } from 'react-native';
import Images from 'app/images/index';


export const AuthenticatedStack = createBottomTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          return <View style={{}}><Image source={focused ? Images.tabHome : Images.homeService} style={{ width: 20, height: 23 }}></Image></View>;
        },
        header: null
      }),
    },
    User: {
        screen: UserInformation,
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            return <View style={{}}><Image source={focused ? Images.usersSelect : Images.usersUnselect} style={{ width: 20, height: 23 }}></Image></View>;
          },
          header: null
        }),
      },
  });