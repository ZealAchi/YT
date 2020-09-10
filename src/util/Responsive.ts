import {Dimensions} from 'react-native'
const { height,width } = Dimensions.get("window");
const diagonal=Math.sqrt(Math.pow(width,2)+Math.pow(height,2));
export const wp=(percent:any)=>width*percent/2;
export const hp=(percent:any)=>height*percent/2;
export const dp=(percent:any)=>diagonal*percent/2;