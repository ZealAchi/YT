import React, { createContext, ReactNode, useState, ReactChild } from 'react'
interface DatosContext {
    profile: Array<Profile>;
    listOfMachines: Array<Machine>;
    trainingList: Array<training>;
}
interface Profile {
    iden: number;
    email: string;
    nombre: string;
    fechan: number;
    rut: string;
    tipo: number;
    idenCondominio: number;
    idenFacebook: number;
    token: string;
    avatarUpload: string;
    avatar: string;
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

export const DataContext = createContext<DatosContext | undefined>(void 0);
function DataContextProvider({ children }: ReactChild) {
    const [state, setState] = useState({})
    console.log(state, 'state')
    return <DataContext.Provider value={{ ...state, setState }}>
        {children}
    </DataContext.Provider>
}

export default DataContextProvider;
