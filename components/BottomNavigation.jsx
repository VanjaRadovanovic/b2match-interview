import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Info from '../screens/Info';
import Data from '../screens/Data';
import DataNavigator from './DataNavigator';
import InfoIcon from '@mui/icons-material/Info';
import DataObjectIcon from '@mui/icons-material/DataObject';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import {faDatabase} from '@fortawesome/free-solid-svg-icons/faDatabase';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 10,
          height: 70,
          bottom: 0,
          padding: 5,
        },
      }}>
      <Tab.Screen
        name="Data"
        component={DataNavigator}
        options={{
          tabBarLabelStyle: {fontSize: 18},
          tabBarLabel: 'Data',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesomeIcon
                icon={faDatabase}
                size={20}
                color={!focused ? '#9B9B9C' : '#1F8AFF'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabelStyle: {fontSize: 18},
          tabBarLabel: 'Info',
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesomeIcon
                icon={faCircleInfo}
                size={20}
                color={!focused ? '#9B9B9C' : '#1F8AFF'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});

export default BottomNavigation;
