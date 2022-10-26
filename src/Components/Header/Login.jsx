import React, {useState} from 'react'

function Login({loginCheck, handler, error}){
    const[credentials,setCredentials] = useState({user:'', password:''})

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCheck(credentials)
    }

    return(
      <form className='dropdown-log' onSubmit={handleSubmit}>
        {(error != "")?(<div className="log-error">{error}</div>): ""}
        <input className='menu-item log-item' type="text" name="user" placeholder='usuario' required onChange={e => setCredentials({...credentials,user: e.target.value})} value={credentials.user}/>
        <input className='menu-item log-item' type="text" name="password" placeholder='contraseña' required onChange={e => setCredentials({...credentials,password: e.target.value})} value={credentials.password}/>
        <input className='menu-item submit' type="submit" value="Ingresar" onSubmit={handler}/>
      </form>
    )}

export default Login