import React, { ReactNode } from "react"
import { TextInput as RNPTextInput } from 'react-native-paper';
import theme from "../Theme";


interface TextInputProps{
    label?:string;
    value?:string;
    onChangeText?:()=>void;
    icon?:ReactNode
}
export default function TextInput({label}:TextInputProps){

    
return( <RNPTextInput
    label={label}
    underlineColor={theme.colors.white}
    selectionColor={theme.colors.white}
    
    selectionColor={theme.colors.white}
    style={{backgroundColor:'transparent',borderBottomColor:'white',color:'red'}}
    placeholderTextColor="red"
    // value={text}
    // onChangeText={text => setText(text)}
  />)
}