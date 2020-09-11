import AsyncStorage from "@react-native-community/async-storage";

export const useLocalStorage = async (key:string,value:any) => {
    const getData= await AsyncStorage.getItem(`@App:${key}`);
    const setData= await AsyncStorage.setItem(key,JSON.stringify(value));
    const removeItem = await AsyncStorage.removeItem(`@App:${key}`);
    return{getData,setData,removeItem}
}