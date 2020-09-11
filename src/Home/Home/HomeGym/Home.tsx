import React from 'react'
import { Image } from 'react-native'
import { Box, Text } from '../../../components/Theme'
import { RectButton } from 'react-native-gesture-handler'
import Button from '../../../components/Button'
import * as RootNavigation from '../../../components/RootNavigation';

const Menu = [
    { label: "GRUPOS DE ENTRENAMIENTO", screen: "GrupoEntramientoHome", img: require("./assets/grupo_de_entrenamiento_icon_youtrain.png") },
    { label: "MÁQUINAS", screen: "", img: require("./assets/maquinas_icon_youtrain.png") },
    { label: "RUTINAS", screen: "", img: require("./assets/rutinas_de_entrenamiento_icon_youtrain.png") },
    { label: "MANTENCIONES", screen: "", img: require("./assets/mantenciones_icon_youtrain.png") },
    { label: "PROFESORES", screen: "", img: require("./assets/profesores_icon_youtrain.png") },
    { label: "BLOG", screen: "", img: require("./assets/blog_icon_youtrain.png") },
]

const Home = () => {
    const styleButton = { style: { borderRadius: 45 } }
    return <Box flex={1} backgroundColor="background">
        <Box paddingTop="l" flex={1}>
            <Box flex={1} flexWrap="wrap" flexDirection="row" justifyContent="center">
                {Menu.map((item) => {
                    return (<ItemMenu key={item.label} {...item} />)
                })}
            </Box>
            <Box flex={0} alignItems="center" marginBottom="l">
                <Button label="Crear Entrenamiento" {...styleButton} />
            </Box>
        </Box>
    </Box>
}
interface ItemMenuProps {
    label: string;
    screen:string;
    onPress: () => void;
}
const ItemMenu = ({ label, img,screen }: ItemMenuProps) => {
    const StyleImage = { style: { height: 115, width: 115 } }
    const StyleBottom = { style: { height: 160, width: 115, margin: 2 } }
    return (<RectButton {...StyleBottom} onPress={()=>{RootNavigation.navigate(screen)}}>
        <Box flexDirection="column">
            <Image source={img} {...StyleImage} />
            <Text variant="body" textAlign="center">{label}</Text>
        </Box>
    </RectButton>)
}

export default Home