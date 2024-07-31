import React from "react";
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from "./bottomnavigator";
// import { actionCreators } from "@actions";
// import { bindActionCreators } from "redux";
// import * as Screen from '@screens'
// import DrawerTab from "./drawerNavigator";
import { navigate, navigationRef } from './RootNavigation';
import HomeScreen from "../screens/HomeScreen";
import CommunityScreen from "../screens/CommunityScreen";
import SearchScreen from "../screens/SearchScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
// import FlashMessage from "react-native-flash-message";
// import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
// import { connect } from "react-redux";
// import { Fonts } from "../assets";
// import { Colors } from "../constants/colors";
// import { StatusBar } from "react-native";
// import { TouchableOpacity } from "react-native";
// import SplashScreen from "react-native-splash-screen"

const Stack = createNativeStackNavigator();

class StackNavigator extends React.Component {



    componentDidMount() {
      
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavigationContainer ref={navigationRef} 
                
                >
                    <Stack.Navigator
                        initialRouteName="BottomTab"
                        // screenOptions={{
                        //     headerShown: false,
                        //     title: "",
                        //     headerLeft: null,
                        //     headerBackVisible: true
                        // }}
                    >
                        {/* {this._addScreen('SplashScreen')} */}
                        <Stack.Screen name={"BottomTab"} component={BottomTabNav} options={{ headerShown: false }} />
                        {/* <Stack.Screen name={"DrawerTab"} component={DrawerTab} options={{ headerShown: false, }} /> */}


                        {/* Authentication */}
                        <Stack.Screen
                            name='HomeScreen'
                            component={HomeScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='CommunityScreen'
                            component={CommunityScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='SearchScreen'
                            component={SearchScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='ChatScreen'
                            component={ChatScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name='ProfileScreen'
                            component={ProfileScreen}
                            options={{ headerShown: false }} 
                        />
                        </Stack.Navigator>
                </NavigationContainer>

            </View>
        )
    }
} 
export default StackNavigator;