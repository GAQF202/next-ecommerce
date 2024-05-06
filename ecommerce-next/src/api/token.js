import { ENV } from "@/utils";
//import { jwtDecode } from "jwt-decode";
import { jwtDecode } from "jwt-decode";

export class Token{
    setToken(token) {
        localStorage.setItem(ENV.TOKEN, token);
    }

    getToken(token) {
        return localStorage.getItem(ENV.TOKEN, token);
    }
    
    removeToken(token) {
        return localStorage.removeItem(ENV.TOKEN, token);
    }

    hasExpired(token){
        const tokenDecode = jwtDecode(token)
        const expiredDate = tokenDecode.exp * 1000;
        const currentDate = new Date().getTime()

        if(currentDate > expiredDate){
            return true
        }

        return false
    }
}