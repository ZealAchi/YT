import React, { ReactNode } from "react"
import { TextInput as RNPTextInput } from 'react-native-paper';
import theme from "../Theme";


interface TextInputProps{
    label?:string;
    value?:string;
    onChangeText?:any;
    icon?:ReactNode;
    text?:string;
    secureTextEntry?:boolean;

}
export default function TextInput({label,text,onChangeText,secureTextEntry=false}:TextInputProps){
    
return( <RNPTextInput
    label={label}
    secureTextEntry={secureTextEntry}
    underlineColor={theme.colors.white}
    selectionColor={theme.colors.white}
    style={{backgroundColor:'transparent',borderBottomColor:'white',color:'red'}}
    placeholderTextColor="red"
    value={text}
    onChangeText={onChangeText}
  />)
}