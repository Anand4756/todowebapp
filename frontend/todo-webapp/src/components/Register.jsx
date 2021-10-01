import React, { useState } from 'react'

const Register = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");

    return (
       
        <div className="register-form">
            Hello {name}
        
            <form>
            <input type="name" onChange={(e) => setname(e.target.value)} />
            <br />
            <input type="email" onChange={(e) => setemail(e.target.value)}/>
            <br />
            <input type="password" onChange={(e) => setpassword(e.target.value)} />
            <br />
            
            <button className="registerbtn" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
