import React, {useState} from 'react';
import './Style/App.css';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import Footer from './Page/Footer/Footer';
import About from './Page/AboutUs/About';
import Products from './Components/Content/Products';
import Contact from './Page/Contacts/Contact';
import userCredentials from "./JSON/user-list.json"
import {BrowserRouter,Routes,Route,Link,Outlet} from "react-router-dom";

function App() {

/*     Lógica de Logeo     */
const[logged,setLogged] = useState(false)
const[user,setUser] = useState({})
const[error,setError] = useState("")
const[errorRegister,setErrorRegister] = useState({number:'', name:'',lastname:'', email:'',password:'',passwordConfirmation:'',result:''})

// creo listas con todos usuarios y pass:
const usersCredential = userCredentials
const users = Object.keys(usersCredential)

//Funcion de login:
const loginCheck = credentials => {
    console.log("logueando")
    console.log(credentials)
    let successLog = false
    users.forEach(e => {
      if (userCredentials[e].email === credentials.email) {
        if (userCredentials[e].password === credentials.password){
          // Lógica si se logró hacer log:
          successLog = true
          setUser({
            id: (parseInt(e)+1).toString(),
            user:credentials.user,
            password:credentials.password
          })
          setLogged(true)
          setError("")
          console.log("Entraste")
        }}
      if (successLog===false){
        setError("Credenciales incorrectas")}})
  console.log(user)
}

const logOut = () => {
  setUser({id:'',user:'', password:''})
  setLogged(false)
  setError("")
}

/*  REGISTER          */

const registrationCheck = registrationInfo => {
  
  setErrorRegister({number:'', name:'',lastname:'', email:'',password:'',passwordConfirmation:'',result:''})
  var hasErrors = false
  if (registrationInfo.number.length != 11){
    setErrorRegister({...setErrorRegister, number: "El número debe tener 11 dígitos"})
    hasErrors = true
  }
  if (registrationInfo.password != registrationInfo.passwordConfirmation){
    setErrorRegister({...setErrorRegister, passwordConfirmation: "Las contraseñas no coinciden"})
    hasErrors = true
  }
  if (!((registrationInfo.email.includes("@"))&&(registrationInfo.email.includes(".com")))){
    setErrorRegister({...setErrorRegister, email: "Ingrese un correo válido"})
    hasErrors = true
  }
  if (registrationInfo.password.length<7){
    setErrorRegister({...setErrorRegister, password: "La contaseña debe contener al menos 7 caracteres"})
    hasErrors = true
  }
  if (hasErrors == false){
    console.log(users)
    usersCredential["99"] = {
      email: registrationInfo.email,
      password: registrationInfo.password
    };
    users.push("99")
    console.log(usersCredential)
    loginCheck(userCredentials["99"])
    setErrorRegister({...setErrorRegister, result: "Registro exitoso"})
  }
  setError("")
}

/*            */
  return (
    <div classname="App">
      <BrowserRouter>
      <Header loginCheck={loginCheck} logOut={logOut} user={user} error={error} registrationCheck={registrationCheck}
      errorRegister={errorRegister} logged = {logged}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<Contact />} />
        {/*<Route path="/product/:id" element={<SingleProduct />} />*/}
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
