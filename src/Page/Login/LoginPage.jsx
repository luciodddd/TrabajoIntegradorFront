import React from 'react'
import Login from '../../Components/Header/Login'

const LoginPage = ({loginCheck, error}) => {
  
  return (
    <div className="home-main">
      <div className="login-page">
        <Login labels={true} loginCheck={loginCheck} error={error}></Login>
      </div>
    </div>
  )
}

export default LoginPage