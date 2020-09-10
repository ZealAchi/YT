import  React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"
import Home from "./Home";
import { HomeRoutes } from "../components/Navigations";
import DrawerContent from "./Drawer"
const Drawer=createDrawerNavigator<HomeRoutes>();
export const  HomeNavigator=()=>(
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home}/>
  </Drawer.Navigator>
)