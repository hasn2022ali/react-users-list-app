import { useState, useEffect } from "react";
import { getUsers } from "../services/userService";
import { User } from "../types/User.type";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchUsers = async () =>{
            setIsLoading(true);
            setError(null);
            try{
                const data = await getUsers();
                setUsers(data);
            }catch(error){
                setError('Faild to fetch users');
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchUsers();
    }, []);

    return {users, isLoading, error}
}