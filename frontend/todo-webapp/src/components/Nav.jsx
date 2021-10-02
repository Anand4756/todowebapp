import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="navbar">
            <h1>TODO</h1>
            <Link to="/register"><button>LOGIN/REGISTER</button></Link>
        </div>
    )
}

export default Nav
