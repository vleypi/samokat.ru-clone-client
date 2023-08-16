import axios from "axios";
import nookies from 'nookies'

export const getProfile = async () => {
    const res = await axios.post(`http://localhost:4200/api/user/profile`,{},{withCredentials: true})
    return res.data
};
  
export const login = async (phone: string) =>{
    const res = await axios.post(`http://localhost:4200/api/auth/login`,{
        phone
    },{withCredentials: true})
    console.log(res)
    return res.data
}