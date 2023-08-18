import { useState } from "react";
import API from "../services/api";

const useApi = ()=>{

    const [response, setResponse] = useState(null);
    const [error ,setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const call = async ()=>{

        setIsLoading(true)

        try {
            let res = await API();
            setResponse(res.data)
            
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    }
    return {call, response, error, isLoading};
}

export default useApi;