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
const[user,setUser] = useState({id:'',user:'', password:'',logged:false})
const[error,setError] = useState("")

// creo listas con todos usuarios y pass:
const usersCredential = userCredentials
const users = Object.keys(usersCredential)
const usersAccounts = []
const usersPass = []

const loggedUser = []

//Funcion de login:
const loginCheck = credentials => {
    let successLog = false
    users.forEach(e => {
      if (userCredentials[e].user === credentials.user) {
        if (userCredentials[e].password === credentials.password){
          // Lógica si se logró hacer log:
          successLog = true
          setUser({
            id: (parseInt(e)+1).toString(),
            user:credentials.user,
            password:credentials.password,
            logged:true
          })}}
      if (successLog===false){
        setError("Credenciales incorrectas")}})
  console.log(user)
}

const logOut = () => {setUser({id:'',user:'', password:'',logged:false})}
/*            */

/*  REGISTER          */

const registrationCheck = registrationInfo => {

}


/*            */
  return (
    <div classname="App">
      <BrowserRouter>
      <Header loginCheck={loginCheck} logOut={logOut} user={user} error={error} registrationCheck={registrationCheck}/>
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
