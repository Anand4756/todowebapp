import React, {useState} from 'react'
import { Link, useHistory } from "react-router-dom";


const Login = () => {
    const [loginemail, setloginemail] = useState("");
    const [loginpassword, setloginpassword] = useState("");

    const Submit = (e) =>{
    e.preventDefault();
    fetch('http://localhost:5000/login',{
        method: 'POST',
            
            headers: {
                'Content-Type': 'application/json'
                
              },
              body: JSON.stringify({
                  loginemail,
                  loginpassword,
              })
              }).then(() => {
                history.push('/');
            })
         
    };
    const history = useHistory();
    
    return (
        <div>
            <form onSubmit={Submit}>
            <input type="email" onChange={(e)=> setloginemail(e.target.value)}></input>
            <input type="password" onChange={(e) => setloginpassword(e.target.value)}></input>
            <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}

export default Login
