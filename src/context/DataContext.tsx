import React, { createContext, useEffect, useState, ReactChild } from 'react'
import {getData,getProfile} from '../hooks/useLocalStorange';
import AsyncStorage from '@react-native-community/async-storage';
interface DatosContext {
    profile: Array<Profile>;
    listOfMachines: Array<Machine>;
    trainingList: Array<training>;
}
interface Profile {
    iden?: number;
    email?: string;
    nombre?: string;
    fechan?: number;
    rut?: string;
    tipo?: number;
    idenCondominio?: number;
    idenFacebook?: number;
    token?: string;
    avatarUpload?: string;
    avatar?: string;
}
interface Machine {
    iden: number;
    nombre: string;
    descripcion: string;
    idenTipo: number;
    idenZm: number;
    img: string;
    link: string;
}
interface training {

}
const DataInit = {
    profile: {
        iden: undefined,
        email: undefined,
        nombre: undefined,
        fechan: undefined,
        rut: undefined,
        tipo: undefined,
        idenCondominio: undefined,
        idenFacebook: undefined,
        token: undefined,
        avatarUpload: undefined,
        avatar: undefined,
    },
    listOfMachines: {
        iden: undefined,
        nombre: undefined,
        descripcion: undefined,
        idenTipo: undefined,
        idenZm: undefined,
        img: undefined,
        link: undefined,
    },
    trainingList: {}
}
export const DataContext = createContext<DatosContext | undefined>(void 0);
function DataContextProvider({ children }: ReactChild) {
    const [state, setState] = useState({...DataInit})
    

    // const getProfile = async () => {
    //     let token = await AsyncStorage.getItem('@App:tokenX');
    //     return token
    // }

    useEffect(()=>{
        const execute=async()=>{
            const Profile = await getProfile()
            if(Profile!==null)
            setState({...state,profile:JSON.parse(Profile)})
        }
        execute()
    },[])
    console.log(state,'stateContextr')
    return <DataContext.Provider value={{ ...state, setState }}>
        {children}
    </DataContext.Provider>
}

export default DataContextProvider;
