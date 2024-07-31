import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
// import Modal from 'react-native-modal';
// import { CommonActions, NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {
//   heightPercentageToDP,
//   widthPercentageToDP,
// } from 'react-native-responsive-screen';
// import { actionCreators } from '@actions';
// import { connect, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as Screen from '@screens';

import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HomeScreen from '../screens/HomeScreen';
import CommunityScreen from '../screens/CommunityScreen';
import SearchScreen from '../screens/SearchScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();
const userType = global.userType;

class BottomTabNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profileImage: '',
      tabValue: [],
      userData: {},
      notificationCount: 0,
    };
  }

  componentDidMount() {

  }





  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          {/* <StatusBar backgroundColor={Colors.red}/> */}
          <BottomTab.Navigator
            screenOptions={{
              headerShown: false,
              headerStyle:  {
                
              },
              tabBarLabelStyle:{
                // fontFamily:Fonts.Regular
              },
              tabBarActiveTintColor:'#0096FF'
            }}>
                <BottomTab.Screen name='HomeScreen' component={HomeScreen} 
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                      <Entypo name="home" color={color} size={size} />
                    )}}/>
                <BottomTab.Screen name='CommunityScreen' component={CommunityScreen} options={{
        tabBarLabel: 'Community',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="people-sharp" color={color} size={size} />
        ),
      }}/>

                <BottomTab.Screen name='SearchScreen' component={SearchScreen} options={{
        tabBarLabel: 'Search',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Feather name="search" color={color} size={size} />
        ),
      }}/>

                <BottomTab.Screen name='ChatScreen' component={ChatScreen} options={{
        tabBarLabel: 'Chat',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubble-outline" color={color} size={size} />
        ),
      }}/>
                <BottomTab.Screen name='ProfileScreen' component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }}/>
          </BottomTab.Navigator>
        </View>
      </>
    );
  }
}

export default BottomTabNavigation;