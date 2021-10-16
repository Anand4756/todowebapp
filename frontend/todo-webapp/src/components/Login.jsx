import React, {useState, useContext} from 'react'
import { Link, useHistory } from "react-router-dom";
import { CredentialContext } from '../App';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [,setCredentials] = useContext(CredentialContext);
    const Submit = (e) =>{
    e.preventDefault();
    fetch('http://localhost:5000/login',{
        method: 'POST',
            
            headers: {
                'Content-Type': 'application/json'
                
              },
              body: JSON.stringify({
                  
                  email,
                  password,
              })
              }).then(() => {
                  setCredentials({
                      email,
                      password
                  })
                history.push('/');
            })
         
    };
    const history = useHistory();
    
    return (
        <div>
            <form onSubmit={Submit}>
            <input type="email" onChange={(e)=> setemail(e.target.value)}></input>
            <input type="password" onChange={(e) => setpassword(e.target.value)}></input>
            <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}

export default Login
