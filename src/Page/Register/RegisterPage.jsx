import React from 'react'
import Register from '../../Components/Header/Register'


const RegisterPage = ({registrationCheck, errorRegister, handler,labels}) => {
  return (
    
      <div className="home-main">
        <div className="login-page register">
          <Register labels={true} registrationCheck={registrationCheck} errorRegister={errorRegister}></Register>
        </div>
      </div>
  )
}

export default RegisterPage