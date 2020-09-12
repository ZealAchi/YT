import React, { ReactNode } from "react"
import { StyleSheet, StyleSheetProperties, View } from "react-native"
import { RectButton } from "react-native-gesture-handler";
import theme, { Text, Theme } from "./Theme";
import { useTheme } from "@shopify/restyle";
import {
    useResponsiveHeight,
    useResponsiveWidth,
    useDimensionsChange
} from "react-native-responsive-dimensions";


const styles = StyleSheet.create({
    container: {
        borderRadius: theme.borderRadii.m,
        height: 45,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        display: 'flex'
    },
    label: {
        fontSize: 15,
        textAlign: "center"
    }
})

interface ButtonProps {
    variant: "default" | "primary" | "transparent" | "facebook" | "dark";
    label?: string;
    onPress: () => void;
    children?: ReactNode;
    style?: StyleSheetProperties;
}

const getColor = (variant: string) => {
    const theme = useTheme<Theme>();
    var backgroundColor = ""
    var color = ""
    switch (variant) {
        case "primary":
            backgroundColor = theme.colors.primary
            color = theme.colors.primary
            return { backgroundColor, color }
        case "transparent":
            backgroundColor = "transparent"
            color = theme.colors.white
            return { backgroundColor, color }
        case "facebook":
            backgroundColor = "#004795"
            color = theme.colors.white
            return { backgroundColor, color }
        case "dark":
            backgroundColor = theme.colors.third
            color = theme.colors.white
            return { backgroundColor, color }
        case "facebook":
            backgroundColor = "#004795"
            color = theme.colors.white
            return { backgroundColor, color }
        default:
            backgroundColor = theme.colors.secondary;
            color = theme.colors.background
            return { backgroundColor, color }
            break;
    }
}
const Button = ({ label, onPress, variant, children, style: styleButton }: ButtonProps) => {

    const { backgroundColor, color } = getColor(variant)
    //     <RectButton onPress={onPress} style={{ borderRadius: 2, marginBottom: 10 }}>
    // 	<View style={{ borderRadius: 2, borderWidth: 1, borderColor: '#e1e5e8', width: '100%', height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15,}}>
    // 		<Image source={{ uri: icon }} style={styles.serviceIcon} />
    // 		<Text style={styles.serviceText}>Continue with <Text style={styles.serviceName}>{name}</Text></Text>
    // 	</View>
    // </RectButton>
    return (
        <RectButton style={[styles.container, { backgroundColor, ...styleButton, width: useResponsiveWidth(70) }]}   {...{ onPress }}>
            <View style={styles.container, [{ borderRadius: theme.borderRadii.m, width: useResponsiveWidth(70), height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...styleButton }]}>
                {children ? (
                    children
                ) : (
                        <Text variant="button" style={{ color }}>{label}</Text>
                    )}
            </View>
        </RectButton>
    )
}

Button.defaultProps = { variant: "default" }

export default Button;