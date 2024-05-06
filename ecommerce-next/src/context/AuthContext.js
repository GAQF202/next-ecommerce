import { createContext, createElement, use, useEffect, useState } from "react";
import { Token, User } from "@/api";

const tokenCtrl = new Token();
const useCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props){

    const {children} = props;
    const [user, setUSer] =  useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(()=>{
        (async () => {
            const token = tokenCtrl.getToken()

            if(!token){
                logout();
                setLoading(false);
                return;
            }

            if(tokenCtrl.hasExpired(token)){
                logout()
            }else{
                await login(token);
            }
        })();
    }, [])

    const login = async (token) => {
        try {
            tokenCtrl.setToken(token)
            const response = await useCtrl.getMe()
            setUSer(response)
            setToken(token)
            setLoading(false)
        } catch (error) {
           console.error(error) 
           setLoading(false)
        }
    }

    const logout = () =>{
        tokenCtrl.removeToken();
        setToken(null)
        setUSer(null)
    }

    const updateUser = (key, value) =>{
        setUSer({
            ...user,
            [key]:value
        })
    }

    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser,
    };

    if(loading) return null;

    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
}