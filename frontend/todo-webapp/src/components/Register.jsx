import React, { useState } from 'react'

const Register = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    return (
       
        <div>
            <form>
            <input type="email"/>
            <input type="password"/>
            <button type="submit"></button>
            </form>
        </div>
    )
}

export default Register
