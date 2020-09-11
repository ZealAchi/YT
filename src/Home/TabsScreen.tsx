import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import { HomeStackScreen } from './HomeStackScreen';
import { Image, Dimensions } from 'react-native';
import HomeStackScreen from './HomeStackScreen';
import { theme } from '../components';
// import Colors from '../UI/Colors';
// import { AvisosStackScreen } from './AvisosStackScreen';



const Tabs = createMaterialBottomTabNavigator();

export const TabsScreen = () => (
    <Tabs.Navigator
    labeled={true}
        screenOptions={({ route }) => ({
            tabBarIcon: (props) => {
                const { focused, color } = props
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused ? require('./assets/Home.png') : require('./assets/Home.png')
                } else if (route.name === 'Comunidad') {
                    iconName = focused ? require('./assets/Comunidad.png') : require('./assets/Comunidad.png');
                } else if (route.name === 'Avisos') {
                    iconName = focused ? require('./assets/Avisos.png') : require('./assets/Avisos.png');
                } else if (route.name === 'Salas') {
                    iconName = focused ? require('./assets/Salas.png') : require('./assets/Salas.png');
                } else if (route.name === 'Pagos') {
                    iconName = focused ? require('./assets/Pagos.png') : require('./assets/Pagos.png');
                }
                return <Image source={iconName} style={{
                    height: 24, width: 24, tintColor: color
                }} />;
            },
        })}
        initialRouteName="Home"
        activeColor={theme.colors.secondary}
        inactiveColor="#f0edf6"
        barStyle={{ backgroundColor: theme.colors.third }}
        style={{
            backgroundColor: '#000000',
            borderTopColor: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
        }}
    >
        <Tabs.Screen name="Home" component={HomeStackScreen} options={{
            tabBarLabel: "Home",
        }} />
        <Tabs.Screen name="Comunidad" component={HomeStackScreen} options={{ tabBarLabel: "Comunidad" }} />
        <Tabs.Screen name="Avisos" component={HomeStackScreen} options={{ tabBarLabel: "Avisos" }} />
        <Tabs.Screen name="Salas" component={HomeStackScreen} options={{ tabBarLabel: "Salas" }} />
        <Tabs.Screen name="Pagos" component={HomeStackScreen} options={{ tabBarLabel: "Pagos" }} />
        {/* <Tabs.Screen name="Buscar" component={SearchStackScreen}/>
        <Tabs.Screen name="Historial" component={HomeStackScreen} options={{tabBarLabel:"Historial",tabBarColor:"green"}}/> */}
    </Tabs.Navigator>
)