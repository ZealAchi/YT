import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Home/Home';
import { HomeGym, GrupoEntrenamientoHome } from './Home/HomeGym';
import { theme } from '../components';

const HomeStack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

 const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{
      title: "Gym", headerTitleAlign: 'center',

      headerTintColor: theme.colors.secondary,
      headerStyle: {
        backgroundColor:theme.colors.third,
      }
    }}>
      <HomeStack.Screen name="Home" component={Home}
        options={{
          title: "Home",
          header: () => { return null },
          transitionSpec: {
            open: config,
            close: config,
          }
        }} />
      <HomeStack.Screen name="HomeGym" component={HomeGym} options={{
        title: "Gym",
        transitionSpec: {
          open: config,
          close: config,
        }
      }} />
      <HomeStack.Screen name="GrupoEntramientoHome" component={GrupoEntrenamientoHome} options={{ title: "Entrenamientos" }} />
    </HomeStack.Navigator>
  )
}
export default HomeStackScreen