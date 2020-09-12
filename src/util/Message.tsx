import { Alert } from "react-native";
export interface AlertMessage{
  message:string;
  cancel:()=>void;
  nextAction:()=>void;
  type?:string
}
export const  AlertMessage=({message,cancel,nextAction,type}:AlertMessage)=>{

Alert.alert(
    'YouTrain',
    message,
    [
      {
        // text: 'Ask me later',
        // onPress: () => console.log('Ask me later pressed')
      },
      cancel&&{
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ],
    { cancelable: false }
  )
  
}