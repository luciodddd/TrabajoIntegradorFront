import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../../Icons/Logo.png"
import DropdownMenu from "../../Components/Header/DropdownMenu";
import Searcher from "../../Components/Header/Searcher";
import Nav from "../../Components/Header/Nav";



function Header({loginCheck, logOut, user, error,registrationCheck}) {
    
    return (
        <header class="sticky">
            <div className="header-container">
                <div className="header-logo">
                    <Link class="logo" to={{ pathname: "/"}}>
                        <img src={Logo} alt="logo"></img>
                        <p>Los mejores alquileres</p>
                    </Link>
                </div>
                <div>
                    <Searcher></Searcher>
                </div>
                <div className="header-login">
                    <DropdownMenu.DropdownMenu>
                        <DropdownMenu.DropdownMenuIU loginCheck={loginCheck} logOut={logOut} user={user} error={error}
                        registrationCheck={registrationCheck}></DropdownMenu.DropdownMenuIU>
                    </DropdownMenu.DropdownMenu>
                </div>
            </div>
            <Nav/>
        </header>
    );
}
export default Header;