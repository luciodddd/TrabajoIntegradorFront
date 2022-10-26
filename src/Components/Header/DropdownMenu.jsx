import React, {useState, useEffect, componentWillReceiveProps} from 'react'
import {ReactComponent as DropdownMenuIcon} from "../../Icons/filter.svg"
import users from "../../JSON/user-list.json"
import {CSSTransition} from "react-transition-group"
import Register from './Register'
import Login from './Login'
import {ReactComponent as BackArrow} from "../../Icons/back-arrow.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons'


const DropdownMenu = (props) => {
  const[open, setOpen] = useState(false);
  return (
    <li>
    <a href="#" className='' onClick={()=>setOpen(!open)}>
      <DropdownMenuIcon></DropdownMenuIcon>
    </a>
    {open && props.children}
    </li>
  )
}

function DropdownMenuIU({loginCheck, error, logOut, user,registrationCheck}) {
  
  const[logged,setLogged] = useState(user.logged)
  const handler = ()=>{
    setLogged(user.logged)}

  const[login,setLogin] = useState(false)
  const handlerLogin = ()=>{
    setLogin(!login)}

  const[register,setRegister] = useState(false)
  const handlerRegister = ()=>{
      setRegister(!register)}

    function DropDownItem(props){
      return(
        <a href={props.link && props.link} className='menu-item' onClick={props.handler} id={props.id}>
          <img className='user-avatar' src={props.profilePic}></img>
          <i class={props.icon}></i>
          {props.children}
          
        </a>
      )}

  

  return (
    <div className='dropdown'>

      <CSSTransition in={register===true} unmountOnExit timeout={100} className="menu-register">
        <div className="menu">
        <div onClick={handlerRegister}>
            <FontAwesomeIcon icon={faCircleArrowLeft} id="dropdown-black"/>
          </div>
        <Register registrationCheck={registrationCheck}></Register>
        </div>
      </CSSTransition>

      <CSSTransition in={(login===true)&&(logged===false)} unmountOnExit timeout={100} className="menu-logging">
        <div className="menu">
          <div onClick={handlerLogin}>
            <FontAwesomeIcon icon={faCircleArrowLeft} id="dropdown-black"/>
          </div>
        <Login loginCheck={loginCheck} error={error}></Login>
        </div>
      </CSSTransition>
      
      <CSSTransition in={(logged===false)&(login===false)&(register===false)} unmountOnExit timeout={100} className="menu-primary">
        <div className="menu">
          <DropDownItem profilePic={users[1].img} handler={handlerLogin}>Ingresar</DropDownItem> 
          <DropDownItem profilePic={users[1].img} handler={handlerRegister}>Registrarse</DropDownItem>
          <DropDownItem link="faq" profilePic={users[1].img}>Preguntas Frecuentes</DropDownItem>
          <DropDownItem profilePic={users[1].img}>Centro de ayuda</DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={logged===true} unmountOnExit timeout={100} className="menu-logged">
        <div className="menu">
        <DropDownItem profilePic={users[1].img}>{users[1].name}</DropDownItem>
        <DropDownItem profilePic={users[1].img}>Quiero ofrecer mi vivienda</DropDownItem>
        <DropDownItem profilePic={users[1].img}>Preguntas Frecuentes</DropDownItem>
        <DropDownItem profilePic={users[1].img}>Centro de ayuda</DropDownItem>
        <DropDownItem profilePic={users[1].img}>Modo Oscuro</DropDownItem>
        <DropDownItem profilePic={users[1].img} handler={logOut}>Cerrar Sesión</DropDownItem>
        </div>
      </CSSTransition>


    </div>
  )
}

export default {DropdownMenu, DropdownMenuIU}