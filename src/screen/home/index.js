import {View, Text, Image} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import EventsScreen from '../events';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {COLORS} from '../../config/colors';

const Tab = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: COLORS.primary,
  },
};

const LocationScreen = ({name}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Text style={{color: COLORS.white}}>Location</Text>
    </View>
  );
};

const UsersScreen = ({name}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Text style={{color: COLORS.white}}>Users</Text>
    </View>
  );
};

const TicketsScreen = ({name}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Text style={{color: COLORS.white}}>Cards</Text>
    </View>
  );
};

const ProfileScreen = ({name}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Text style={{color: COLORS.white}}>Profile</Text>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <PaperProvider theme={theme}>
      <Tab.Navigator
        initialRouteName="Events"
        activeColor={COLORS.primary}
        inactiveColor={COLORS.primary}
        labeled={false}
        barStyle={{backgroundColor: COLORS.primary}}>
        <Tab.Screen
          name="Location"
          component={LocationScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../assets/Location.png')}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Users"
          component={UsersScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../assets/Group.png')}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../assets/nonfill.png')}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cards"
          component={TicketsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../assets/tickets.png')}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../assets/Profile.png')}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: color,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </PaperProvider>
  );
}
