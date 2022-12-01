import "../../Style/add-product.css"
import "../../Style/bootstrap.min.css"

import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import axios from 'axios';


function AddProduct() {
    
    return (
            <div className="frame-add-product">
                <hr />
                <hr />
                <div className='section-title'>
                    <hr />
                    <h1>Administracion</h1>
                </div>
                <form>
                    <h6>Crear Propiedad</h6>
                    <div className='form-cointainer'>
                        <div className="info-container">
                            <div className="user-data">
                                <div className="user-data-form">
                                    <div className="input-container">
                                        <label for="name">Nombre de la propiedad</label>
                                        <input type="text" defaultValue="Las Marias" required name="name" id="name"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="categoria">Categoria</label>
                                        <input type="text" defaultValue="Hotel" required name="category" id="category"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="adrress">Direccion</label>
                                        <input type="text" defaultValue="Av. Colon 1654" required name="adress" id="adress"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="city">Ciudad</label>
                                        <input type="text" defaultValue="Córdoba" required name="city" id="city"/>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label for="description">Descripcion</label>
                                    <input type="text" defaultValue="Deja aqui un comentario de tu propiedad" required name="description" id="description"/>
                                </div>
                            </div>                           
                            <div className="add-atributes">
                                <h6>Agregar Atributos</h6>    
                                <div className="add-atributes-icon">
                                    <div className="input-container">
                                        <label for="name">Nombre</label>
                                        <input type="name" defaultValue="Nombre" required name="name" id="name"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="icono">Nombre</label>
                                        <input type="icono" defaultValue="Icono" required name="icono" id="icono"/>
                                    </div>
                                    <div className="input-container">
                                        <Link class="add-icon" to={{ pathname: "/"}}>
                                            <button type="submit">+</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <h6>Politicas del Producto</h6>
                            <div className="poli-product">
                                <div className="input-container">
                                    <h3>Normas de la casa</h3>
                                    <label for="normas">Normas de la casa</label>
                                    <input type="normas" defaultValue="Escriba Aqui" required name="normas" id="normas"/>
                                </div>
                                <div className="input-container">
                                    <h3>Salud y Seguridad</h3>
                                    <label for="descripcion">Descripcion</label>
                                    <input type="descripcion" defaultValue="Escriba Aqui" required name="descripcion" id="descripcion"/>
                                </div>
                                <div className="input-container">
                                    <h3>Politica de Cancelacion</h3>
                                    <label for="Cancelacion">Descripcion</label>
                                    <input type="Cancelacion" defaultValue="Escriba Aqui" required name="Cancelacion" id="Cancelacion"/>
                                </div>
                            </div>
                            <h6>Cargar Imagenes</h6>
                            <div className="Add-imagenes">
                                <input type="url" defaultValue="https://" required name="url" id="url"/>
                                <Link class="add-imagen" to={{ pathname: "/"}}>
                                    <button type="submit">+</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link class="create" to={{ pathname: "/"}}>
                        <button type="submit">Crear</button>
                    </Link>
                </form> 
            </div>
    )
}
export default AddProduct