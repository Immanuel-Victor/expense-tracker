import { useState } from "react"
import { useAuthContext } from "./useAuthContext"


const useSignup = () => {
    const localHost = "http://localhost:4000";
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch} = useAuthContext()

    const signup = async (nome,email,senha) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${localHost}/api/user/signup`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nome,email,senha})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))

            dispatch({type: 'LOGIN', payload: json})
        }

        setIsLoading(false);
    }

    return {signup, isLoading, error}
}

export {useSignup}