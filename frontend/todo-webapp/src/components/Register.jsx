import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

const Register = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    
    const Submit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:5000/register',{
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json'
                
              },
              body: JSON.stringify({
                  email,
                  password,
                  name
              })
              
        }).then(() => {
            history.push('/');
        })
    
    };
    
    const history = useHistory();
    return (
       
        <div className="register-form">
           <h2 className="regname"> Hello {name}</h2>
        
            <form onSubmit={Submit} className="regform">
            <input type="name" required onChange={(e) => setname(e.target.value)} />
            <br />
            <input type="email" required onChange={(e) => setemail(e.target.value)}/>
            <br />
            <input type="password" required onChange={(e) => setpassword(e.target.value)} />
            <br />
            
            <button className="registerbtn" type="submit">Register</button>
            </form>
            <Link to="/login"><button className="registertbn" type="submit">Login</button></Link>
        </div>
    )
}

export default Register
