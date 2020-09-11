import React from "react"
import { DrawerContentOptions, DrawerContentComponentProps } from "@react-navigation/drawer"
import { Box,Text } from "../../components/Theme"
import { Image } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import DrawerItem from "./DrawerItem"
import { RectButton } from "react-native-gesture-handler"

const items=[
    {icon:"",label:"Mi perfil",screen:"MyProfile"},
    {icon:"",label:"Notificaciones",screen:"Notifications"},
    {icon:"",label:"Método de pago",screen:"M"},
    {icon:"",label:"Panel de admin. general",screen:"PanelAdminGeneral"},
    {icon:"",label:"Panel de admin. edificio",screen:"PanelAdminEdificio"},
    {icon:"",label:"Preguntas",screen:"Preguntas"},
    {icon:"",label:"Contacto",screen:"Contacto"},
]

const Drawer=(props:DrawerContentComponentProps<DrawerContentOptions>)=>{
    
    const TextStyled={style:{color:'red',fontSize:16}}

    return (
        <Box flex={1}>
            <Box flex={0.08} backgroundColor="error" flexDirection="row">
                <FontAwesome name="user-circle-o" size={25}/>
                <Box flexDirection="column">
                <Text>Carlos Anaya</Text>
                <Text>Admin</Text>
                </Box>
            </Box>
            <Box flex={1}  backgroundColor="white">
                    {items.map((item)=>{
                        return(
                            <DrawerItem key={items.screen} {...item}/>
                        )
                    })}
                    <RectButton>
            <Box borderTopColor="secondary" borderTopWidth={1}>
                <Text {...TextStyled} variant="body" padding="s">{'Cerrar sesión'}</Text>
            </Box>
        </RectButton>
                </Box>
        </Box>
    )
}
export default Drawer