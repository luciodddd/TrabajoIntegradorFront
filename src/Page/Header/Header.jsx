import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../../Icons/Logo.png"
import DropdownMenu from "../../Components/Header/DropdownMenu";
import Button from "../../Components/Header/Button";



function Header({loginCheck, logOut, user, error,registrationCheck, errorRegister, logged}) {
    
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
                        {(sessionStorage.getItem("loggedInUser") != true)?(<Button className="login-buttons" link="register" text="Crear Cuenta"></Button>): ""}
                        {(sessionStorage.getItem("loggedInUser") != true)?(<Button className="login-buttons" link="login" text="Iniciar Sesión"></Button>): ""}
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