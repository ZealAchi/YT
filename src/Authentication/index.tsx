import React from "react";
import {createStackNavigator} from "@react-navigation/stack";


import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassowrd";
import { AuthenticationRoutes } from "../components/Navigations";

// export const assets=[...loginAssets];

const AuthenticationStack=createStackNavigator<AuthenticationRoutes>();
export const AuthenticationNavigator=()=>{
    return(
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="Login" component={Login}/>
            <AuthenticationStack.Screen name="SignUp" component={SignUp}/>
            <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword}/>
        </AuthenticationStack.Navigator>
    )
}