import React from "react"

import { Box, Text } from "../../components/Theme";
import { TextInput, Image } from "react-native";
import {
    useResponsiveHeight,
    useResponsiveWidth,
    useDimensionsChange
} from "react-native-responsive-dimensions";
import { RectButton } from "react-native-gesture-handler";


const Home = ({navigation}) => {
    return (<Box flex={1} backgroundColor="background" paddingBottom="m" paddingTop="m" alignItems="center">
        <Box flexDirection="row">
            <TextInput placeholder="¿Qué estás buscando?" style={{
                backgroundColor: 'white', borderRadius: 25,
                color: "#000", borderTopEndRadius: 25, borderTopLeftRadius: 25,
                borderBottomEndRadius: 25, borderBottomLeftRadius: 25,
                borderWidth: 0,
                height: useResponsiveHeight(6),
                width: useResponsiveWidth(80)
            }}
                placeholderTextColor="#000000"
            />
        </Box>
        <Text color="white">YouTrain</Text>
        <RectButton onPress={()=>navigation.navigate('HomeGym')}>
            <Image source={require("./assets/Logo.png")} style={{ height: 150, width: 150 }} />
        </RectButton>
        <Text color="white">MI GYM</Text>
    </Box>)
}

export default Home;