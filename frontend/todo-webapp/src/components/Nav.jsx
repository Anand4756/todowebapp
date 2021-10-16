import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CredentialContext } from '../App'

const Nav = () => {
    const [nameoflogged] = useContext(CredentialContext)
    return (
        <div className="navbar">
            <h1>TODO</h1>
            {!nameoflogged && <Link to="/register"><button>LOGIN/REGISTER</button></Link>}
            {nameoflogged && nameoflogged.email}
        </div>
    )
}

export default Nav
