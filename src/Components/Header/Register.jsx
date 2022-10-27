import React, {useState} from 'react'

function Register({registrationCheck, errorRegister, handler}){

    const[registrationInfo,setRegistrationInfo] = useState({city:'', number:'', name:'',lastname:'',
                                                    user:'',email:'',password:'',passwordConfirmation:''})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        registrationCheck(registrationInfo)
    }

    const [onlyNumbers, setOnlyNumbers] = useState('');

    const handleChangeNumber = event => {
      const result = event.target.value.replace(/\D/g, '');
      setOnlyNumbers(result);
      setRegistrationInfo({...registrationInfo,number: result})
    };

    return(
      <form className='dropdown-log' id="form-register" onSubmit={handleSubmit}>
        <input className='menu-item log-item' type="text" name="city" placeholder='Ciudad' required onChange={e => setRegistrationInfo({...registrationInfo,city: e.target.value})} value={registrationInfo.city}/>
        {(errorRegister.number != "")?(<div className="log-error">{errorRegister.number}</div>): ""}
        <input className='menu-item log-item' type="text" name="number" placeholder='Número de teléfono' onChange={e => handleChangeNumber(e)} value={onlyNumbers}/>
        <input className='menu-item log-item' type="text" name="name" placeholder='Nombre' required onChange={e => setRegistrationInfo({...registrationInfo,name: e.target.value})} value={registrationInfo.name}/>
        <input className='menu-item log-item' type="text" name="lastname" placeholder='Apellido' required onChange={e => setRegistrationInfo({...registrationInfo,lastname: e.target.value})} value={registrationInfo.lastname}/>
        <input className='menu-item log-item' type="text" name="user" placeholder='Usuario' required onChange={e => setRegistrationInfo({...registrationInfo,user: e.target.value})} value={registrationInfo.user}/>
        {(errorRegister.email != "")?(<div className="log-error">{errorRegister.email}</div>): ""}
        <input className='menu-item log-item' type="text" name="email" placeholder='Correo electrónico' required onChange={e => setRegistrationInfo({...registrationInfo,email: e.target.value})} value={registrationInfo.email}/>
        {(errorRegister.password != "")?(<div className="log-error">{errorRegister.password}</div>): ""}
        <input className='menu-item log-item' type="password" name="password" placeholder='Contraseña' required onChange={e => setRegistrationInfo({...registrationInfo,password: e.target.value})} value={registrationInfo.password}/>
        {(errorRegister.passwordConfirmation != "")?(<div className="log-error">{errorRegister.passwordConfirmation}</div>): ""}
        <input className='menu-item log-item' type="password" name="password-confirm" placeholder='Confirme la contraseña' required onChange={e => setRegistrationInfo({...registrationInfo,passwordConfirmation: e.target.value})} value={registrationInfo.passwordConfirmation}/>
        {(errorRegister.result != "")?(<div className="log-success">{errorRegister.result}</div>): ""}
        <input className='menu-item submit' type="submit" value="Registrar" onSubmit={handleSubmit}/>
        <div><icon></icon></div>
      </form>
    )}

export default Register