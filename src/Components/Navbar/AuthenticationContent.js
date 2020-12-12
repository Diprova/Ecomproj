import React from 'react'

const AuthenticationContent = ({setAuthenVisibility}) => {
    return (
        <div className="authentication-content">
        <button className="authentication-button" onClick={()=>setAuthenVisibility(false)}>Login or Sign Up</button>
        </div>
    )
}

export default AuthenticationContent
