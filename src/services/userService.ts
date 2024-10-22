import axios from "axios";

export const getUsers = async ()=>{
    const response =  await axios.get("https://randomuser.me/api/?results=1000");
    return response.data.results;
}