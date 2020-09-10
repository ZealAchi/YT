import React, { ReactNode } from "react"
import { StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler";
import theme, { Text, Theme } from "./Theme";
import { useTheme } from "@shopify/restyle";

const styles = StyleSheet.create({
    container: {
        borderRadius: theme.borderRadii.m,
        height: 45,
        width: 245,
        justifyContent: "center",
        alignItems: "center"
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
}

const getColor = (variant:string) => {
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
        default:
            backgroundColor = theme.colors.secondary;
            color = theme.colors.background
            return { backgroundColor, color }
            break;
    }
}
const Button = ({ label, onPress, variant, children }: ButtonProps) => {
    
    const { backgroundColor, color } = getColor(variant)
    return (
        <RectButton style={[styles.container, { backgroundColor }]} {...{ onPress }}>
            {children ? (
                children
            ) : (
                    <Text variant="button" style={{ color }}>{label}</Text>
                )}

        </RectButton>
    )
}

Button.defaultProps = { variant: "default" }

export default Button;