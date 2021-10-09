import React, {useState} from 'react'


const Login = () => {
    const [email, setemail] = useState("")
    return (
        <div>
            <input type="email" onChange={(e)=> setemail(e.target.value)}></input>
            <input type="password"></input>
            <button>LOGIN</button>
        </div>
    )
}

export default Login
