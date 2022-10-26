import React, {useState} from 'react'

function Register({registrationCheck}){

    const[registrationInfo,setRegistrationInfo] = useState({city:'', number:'', name:'',lastname:'',
                                                    email:'',password:'',passwordConfirmation:''})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        registrationCheck(registrationInfo)
    }


    return(
      <form className='dropdown-log' id="form-register" onSubmit={handleSubmit}>
        <input className='menu-item log-item' type="text" name="city" placeholder='Ciudad' />
        <input className='menu-item log-item' type="text" name="number" placeholder='Número de teléfono' />
        <input className='menu-item log-item' type="text" name="name" placeholder='Nombre' />
        <input className='menu-item log-item' type="text" name="lastname" placeholder='Apellido' />
        <input className='menu-item log-item' type="text" name="email" placeholder='Correo electrónico' />
        <input className='menu-item log-item' type="text" name="password" placeholder='Contraseña' />
        <input className='menu-item log-item' type="text" name="password-confirm" placeholder='Confirme la contraseña' />
        <input className='menu-item submit' type="submit" value="Registrar" />
        <div><icon></icon></div>
      </form>
    )}

export default Register