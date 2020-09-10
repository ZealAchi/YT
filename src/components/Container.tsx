import React, { ReactNode } from "react"
import {Image,Dimensions,StyleSheet, StatusBar}  from "react-native"
import theme,{Box} from "./Theme"
import { useSafeArea } from "react-native-safe-area-context";

const {width}=Dimensions.get("window");
interface ContainerProps{
    children:ReactNode;
    footer:ReactNode;
}

const Container=({children,footer}:ContainerProps)=>{
    const insets=useSafeArea()
    return (
        <Box flex={1} backgroundColor="secondary">
            <StatusBar barStyle="light-content"/>
            <Box backgroundColor="white">
                {children}
            </Box>
            <Box backgroundColor="secondary">
                {footer}
                <Box height={insets.bottom}/>
            </Box>

        </Box>
    )
}
export default Container;