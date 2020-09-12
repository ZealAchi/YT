import AsyncStorage from "@react-native-community/async-storage";


export const getProfile = async () => {
    let result = await AsyncStorage.getItem('@App:Profile');
    return result
}
// export const getData = async (key: string) => {
//     const result = await AsyncStorage.getItem(`@App:${key}`);
//     return result
// }
export const setData = async (key: string, value: any) => {
    console.log('key,value',key,value)
    const result = await AsyncStorage.setItem(key, JSON.stringify(value));
    return result
}
// export const removeItem = async (key: string) => {
//     const result = await AsyncStorage.removeItem(`@App:${key}`);
//     return result;
// }