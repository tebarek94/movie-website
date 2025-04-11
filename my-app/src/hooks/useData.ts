import { useEffect, useState } from "react";
import apiClient from "../services/api-clients";

interface FetchRespones<T>{
    count:number;
    results:T[]
}

const useData=<T>(endPoints:string)=>{
const [data,setData]=useState<T[]>([])
const [error,seterror]=useState("");
const [isLoading,setLoading]=useState(false);
useEffect(()=>{
setLoading(true);
apiClient.get<FetchRespones<T>>(endPoints)
.then((res)=>{
    setData(res.data.results)

})
.catch((err)=>{
    seterror(err.message)
    setLoading(false);
})
},[endPoints]);
return {error,data,isLoading}; 

}

export default useData