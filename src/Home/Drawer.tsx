import React from "react"
import { DrawerContentOptions, DrawerContentComponentProps } from "@react-navigation/drawer"
import { Box,Text } from "../components/Theme"
import { Image } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const items=[
    {icon:"",label:"Mi perfil",onPress={()=>{}}},
    {icon:"",label:"Notificaciones",onPress={()=>{}}},
    {icon:"",label:"Método de pago",onPress={()=>{}}},
    {icon:"",label:"Panel de admin. general",onPress={()=>{}}},
    {icon:"",label:"Panel de admin. edificio",onPress={()=>{}}},
    {icon:"",label:"Preguntas",onPress={()=>{}}},
    {icon:"",label:"Contacto",onPress={()=>{}}},
]

const Drawer=(props:DrawerContentComponentProps<DrawerContentOptions>)=>{
    
    return (
        <Box flex={1}>
            <Box flex={0.08} backgroundColor="error" flexDirection="row">
                <FontAwesome name="user-circle-o" size={25}/>
                <Box flexDirection="column">
                <Text>Carlos Anaya</Text>
                <Text>Admin</Text>
                </Box>
                <Box position="absolute" top={0} left={0}
                right={0} bottom={0} backgroundColor="white"
                >
                    <Text>sasd</Text>
                </Box>
            </Box>
        </Box>
    )
}
export default Drawer