import { useMemo, useContext } from 'react';

import axios from 'axios';
import { AlertMessage } from '../util/Message';
import { DataContext } from '../context/DataContext';
import {useLocalStorage, setData} from '../hooks/useLocalStorange'
import AsyncStorage from '@react-native-community/async-storage';
const uri = 'http://186.64.122.181:86/';
interface ExacuteProps {
    urlC: string;
    data?: any;
    identifier: string;
}
export default function useAPI() {

    const {state,setState} = useContext(DataContext)
    // const localStorage=useLocalStorage()
    async function postDataAPI({ urlC, data, identifier }: ExacuteProps) {
        const Vurl = `${uri}/api/${urlC}`;
        axios.post(Vurl, { ...data }).then(async (res) => {

            try {

                const { data } = res
                switch (identifier) {
                    case "login":
                        if (data?.result === 0) {
                            AlertMessage({ message: data.message })
                        } else if (data?.result === 1) {
                            // setData('Profile',data.data[0])
                             await AsyncStorage.setItem('@App:Profile',JSON.stringify(data.data[0]));
                            setState({...state,Profile:data.data[0]})
                        }
                        break;

                    default:
                        console.log(data)
                        break;
                }


            } catch (error) {
                console.log(error)
            }
        }).catch((error) => { console.log(error);})
    }
    const signIn = async (data: any) => {
        postDataAPI({ data, urlC: "Access/Login", identifier: "login" })
    }
    return { signIn }
}
