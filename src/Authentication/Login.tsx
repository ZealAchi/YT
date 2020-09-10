import React from "react"
import { View, ImageBackground, Image, Dimensions } from "react-native"
import {
    useResponsiveHeight,
    useResponsiveWidth,
    useDimensionsChange
} from "react-native-responsive-dimensions";
import { Text } from "../components"
import theme, { Box } from "../components/Theme"
import { ScrollView } from "react-native-gesture-handler"
import Button from "../components/Button"
import TextInput from "../components/Form/TextInput";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeRoutes } from "../components/Navigations";

const { width } = Dimensions.get("window")
export default function Login({ navigation }: 
CompositeNavigationProp<StackNavigationProp<AuthenticationRoutes,"Login">,
DrawerNavigationProp<HomeRoutes,"Home">,
) {

    const styleImageBackground = { style: { flex: 1, opacity: 1 } }
    const CardStyle = {
        style: {
            width: "100%",
            height: "100%",
            backgroundColor: "#000000",
            paddingLeft: "7%",
            paddingTop: "2%",
            paddingRight: "7%",
            borderRadius: theme.borderRadii.m
        }
    }
    return <Box flex={1}>
        <ImageBackground  {...styleImageBackground} blurRadius={2} resizeMode="cover" source={require('./assets/youtrain1.png')}>
            <View style={{ backgroundColor: 'rgba(0,0,0, 0.60)', flex: 1 }}>
                <Box justifyContent="center" alignItems="center" >
                    <ScrollView>
                        <Box onLa flex={1} flexDirection="column" justifyContent="space-between">
                            <Box flex={.8} width={useResponsiveWidth(100) / 1.2} >
                                <Image style={{ width: '100%', height: 100 }}
                                    resizeMode="center" source={require('./assets/logo_youtrain.png')} />
                            </Box>
                            <Box flex={2.4} justifyContent="center" alignContent="center" alignItems="center">
                                <Box flex={1} width={useResponsiveWidth(100) / 1.2}>
                                    <View {...CardStyle}>
                                        <TextInput label="RUT/E-Mail" />
                                        <TextInput label="Contraseña" />
                                        <Box>
                                            <Button variant="transparent" label="¿Olvidastes tu contraseña?" onPress={() => { navigation.navigate("ForgotPassword") }} />
                                        </Box>
                                        <Button onPress={()=>navigation.navigate("Home")} label="INICIAR SESIÓN" />
                                        <Button variant="transparent" onPress={() => { navigation.navigate("ForgotPassword") }}>
                                            <Box flexDirection="row" flex={1} justifyContent="space-around">
                                                <Text variant="body" color="secondary">¿No tienes una cuenta?    Registrate aqui</Text>
                                            </Box>
                                        </Button>
                                    </View>
                                </Box>
                                <Button variant="facebook" label="Continuar con Facebook" />
                                <Button label="Solicitar Código" />
                                <Button label="Escanear Código" />
                            </Box>
                        </Box>
                    </ScrollView>
                </Box>
            </View>
        </ImageBackground>
    </Box>
}