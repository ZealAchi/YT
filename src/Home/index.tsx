import  React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"
import Home from "./Home";
import { HomeRoutes } from "../components/Navigations";
import Drawer from "./Drawer"
const Drawer=createDrawerNavigator<HomeRoutes>();
export const  HomeNavigator=()=>(
  <Drawer.Navigator drawerContent={Drawer}>
    <Drawer.Screen name="Home" component={Home}/>
  </Drawer.Navigator>
)