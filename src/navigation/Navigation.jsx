import React from "react"; // Agrega esta importación para que funcione con JSX
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../screens/login';

const HomeStackNavigator = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabsPoke(){
    return(
        <Tab.Navigator
        initialRouteName="SignIn"
        >
            <Tab.Screen 
            name="SignIn"
            component={LoginPoke} // Cambiado a "component"
            options={{
                headerShown: false,
            }}
            />


        </Tab.Navigator>
    );
}