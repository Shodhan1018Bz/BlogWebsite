import {useState,useEffect,useContext} from "react"
import axios from "axios"
import { UserContext } from "../App";
import { useNavigate } from 'react-router-dom';
import NavBar from "./homepage";
export default function User(){
   const [message,setMessage]=useState();
   const navigate = useNavigate();
   const user=useContext(UserContext);
   async function fetchUser(){
      await axios.get("http://localhost:3000/user",{
         headers:{token:localStorage.getItem("token")}
      })
      .then(res=>{
         console.log(res.data.message);
         setMessage(res.data.message)
      });
   }
   if(user&& user.login==0){
      navigate("/login");
   }
   useEffect(()=>{
      const email=user&&user.userEmail;
      fetchUser();
   },[])
   if(!message){
      return(
         <h1>Loading..</h1>
      )
   }
   // console.log(message)

   return(
      <div>
         <NavBar/>
         <h1>{message}</h1>
      </div>
      
   )
}
