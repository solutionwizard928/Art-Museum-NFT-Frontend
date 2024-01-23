import axios from "axios";

const baseURL="http://localhost:5001";
 
 export async function getData(url){
   const success =await axios.get(`${baseURL}/${url}`);

   return success;
}
export async function getPromptInput(url,inputs){
    console.log(inputs)
    const success =await axios.post(`${baseURL}/${url}`,inputs);
 
    return success;
 }
 
 


