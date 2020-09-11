import {  createText, createBox } from "@shopify/restyle";
import { DefaultTheme } from 'react-native-paper';

const theme={
    ...DefaultTheme,
    colors:{
        // primary:"#000000",
        // secondary:"#c0ee4f",
        // danger:"#FF0058",
        // text:"white",
        // XColor:"rgba(000,100, 11, 0.12)",
        // Fondo1:'rgba(000,020, 11, 1)',
        // button:"#0C0D34",
        // white:"white",
        // grey:"rgba(12,13,52,0.05)",
        primary: "white",
        secondary:"#c0ee4f",
        third:"#000000",
        background:"rgba(000,020, 11, 1)",
        surface: "red",
        accent: "blue",
        error: "#FF0058",
        text: "white",
        onSurface: "yellow",
        onBackground: "green",
        placeholder: "white",
        backdrop: "red",
        notification: "red",
        white:"white"
    },
    spacing:{
        s:8,
        m:16,
        l:24,
        xl:40,
        x20P:"20%",
    },
    borderRadii:{
        s:4,
        m:10,
        l:25,
        xl:75,
    },
    textVariants:{
        hero:{
            fontSize:70,
            lineHeight:70,
            // fontFamily:"SFProText-Bold",
            color:"white",
            textAlign:"center"
        },
        title1:{
            fontSize:67.1,
            // fontFamily:"SFProText-Semibold",
            color:"secondary"
        },
        title2:{
            fontSize:24,
            lineHeight:30,
            // fontFamily:"SFProText-Semibold",
            color:"secondary"
        },
        body:{
            fontSize:12,
            lineHeight:18,
            // fontFamily:"SFProText-Semibold",
            color:"white"
        },
        button:{
            fontSize:15,
            // fontFamily:"SFProText-Semibold",
            color:"white"
        }
    },
    breakpoints:{}
}


export type Theme=typeof theme;
export const Text=createText<Theme>();
export const Box = createBox<Theme>();

export default theme;