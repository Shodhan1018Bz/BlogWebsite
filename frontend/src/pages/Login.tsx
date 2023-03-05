import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from "axios";



const CLIENT_ID="497231389779-dlf46tk6chkjll1h239hr60sq71vqbcf.apps.googleusercontent.com";

function LoginWithGoogle(props:any){
    
   
    return (
        <div>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <GoogleLogin
            onSuccess={async (credentialResponse:any )=> {
               await  axios.post('http://localhost:3000/login',
                    credentialResponse
                ).then(res=>{
                    console.log(res.data);
                })
                .catch((err)=>console.log(err))
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
            />
        </GoogleOAuthProvider>
        
        </div>
    )
}
export default LoginWithGoogle;