// IMPORT CSS//
import "../../Style/header.css"
import "../../Style/bootstrap.min.css"
import "../../Style/styles.css"
import "../../Style/home.css"


import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Icons/Logo.png"
import DropdownMenu from "../../Components/Header/DropdownMenu";
import Button from "../../Components/Header/Button";



function Header({loginCheck, logOut, user, error,registrationCheck, errorRegister, logged}) {
    
    const location = useLocation()
    const [displayButtons,setDisplayButtons] = useState({
        login:true,
        register:true
    })

    useEffect(() => {
        const isPath = (path) => path === location.pathname;
        setDisplayButtons({
            login: !isPath('/register'),
            register: !isPath('/login')
        })
    }, [location]);


    return (
        <header class="sticky">
            <div className="header-container">
                <div className="header-logo">
                    <Link class="logo" to={{ pathname: "/"}}>
                        <img src={Logo} alt="logo"></img>
                        <p>Los mejores alquileres</p>
                    </Link>
                </div>
                
                <div className="header-login">
                    {/*redux para los inicios de sesión*/}
                    {/*use context para los inicios de sesión*/}
                    {/* por ahora usar sesionStorage */}
                    {/*  */}
                    <div className="header-buttons">
                        {(displayButtons.login == true)?(<Button className="login-buttons" link="register" text="Crear Cuenta"></Button>): ""}
                        {(displayButtons.register == true)?(<Button className="login-buttons" link="login" text="Iniciar Sesión"></Button>): ""}
                    </div>
                    
                    {/*
                    <DropdownMenu.DropdownMenu>
                        <DropdownMenu.DropdownMenuIU loginCheck={loginCheck} logOut={logOut} user={user} error={error}
                        registrationCheck={registrationCheck} errorRegister={errorRegister} logged={logged} ></DropdownMenu.DropdownMenuIU>
                    </DropdownMenu.DropdownMenu>
                    */ }
                </div>
            </div>
            
        </header>
    );
}
export default Header;