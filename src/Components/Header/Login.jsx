import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login({loginCheck, handler, error,labels}){
    const[credentials,setCredentials] = useState({email:'', password:''})
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        loginCheck(credentials)
        if (sessionStorage.getItem("loggedInUser")==="true"){
          navigate("/")
        }
    }


    return(
      <form className='dropdown-log' onSubmit={handleSubmit}>
        {(error != "")?(<div className="log-error">{error}</div>): ""}
        {(labels == true)?(<label className='log-item' for="email">Correo Electrónico</label>): ""}
        <input className='menu-item log-item' type="text" id="email" name="email" placeholder='correo electrónico' required onChange={e => setCredentials({...credentials,email: e.target.value})} value={credentials.email}/>
        {(labels == true)?(<label className='log-item' for="password">Contraseña</label>): ""}
        <input className='menu-item log-item' id='password' type="password" name="password" placeholder='contraseña' required onChange={e => setCredentials({...credentials,password: e.target.value})} value={credentials.password}/>
        <input className='menu-item submit' id="submit-login" type="submit" value="Ingresar" onSubmit={handler}/>
      </form>
    )}

export default Login