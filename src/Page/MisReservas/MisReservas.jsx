import "../../Style/mis-reservas.css"
import "../../Style/bootstrap.min.css"

import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import axios from 'axios';
import Searcher from '../../Components/Header/Searcher';


function MisReservas() {
    
    return (
            <div className="Reservas">
                <hr />
                <hr />
                <div className='MisReservas-Titulo'>
                    <hr />
                    <hr />
                    <h6 className='titulo'>Mis Reservas</h6>
                </div>
                <div>
                    <div className='Reservas-confirm'>
                        <div className="Reservas-confirmadas">
                            <h3>Reservas confirmadas</h3>
                            <div class="dropdown-searcher">
                                {/* <Searcher cities={cities}></Searcher> */}
                                <p>Remplazar por el searcher/dropdown con las reservas</p>
                                <div>
                                <Link className="boton-volver" class="volver" to={{ pathname: "/"}}>
                                    <button type="submit">Volver a la pagina principal</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default MisReservas;