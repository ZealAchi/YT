import React from "react";

import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../components/Theme";
interface DrawerItemProps {
    icon: string;
    screen: string;
    label: string;
}


const DrawerItem = ({ icon, screen, label }: DrawerItemProps) => {
    const TextStyled={style:{color:'red',fontSize:16}}
    return (
        <RectButton>
            <Box>
                <Text {...TextStyled} variant="body" padding="s">{label}</Text>
            </Box>
        </RectButton>
    )
}
export default DrawerItem;