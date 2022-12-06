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
                    <div className='form-styles'>
                        <h6>Crear Propiedad</h6>
                        <div className="add-data">
                            <div className="info-containers">
                                <div className="users-data">
                                    <div className="users-data-form">
                                        <div className="input-containers">
                                            <label for="name">Nombre de la propiedad</label>
                                            <input type="text" defaultValue="Las Marias" required name="name" id="name"/>
                                        </div>
                                        <div className="input-containers">
                                            <label for="categoria">Categoria</label>
                                            <input type="text" defaultValue="Hotel" required name="category" id="category"/>
                                        </div>
                                        <div className="input-containers">
                                            <label for="adrress">Direccion</label>
                                            <input type="text" defaultValue="Av. Colon 1654" required name="adress" id="adress"/>
                                        </div>
                                        <div className="input-containers">
                                            <label for="city">Ciudad</label>
                                            <input type="text" defaultValue="Córdoba" required name="city" id="city"/>
                                        </div>
                                    </div>
                                    <div className="input-containers">
                                        <label for="description">Descripcion</label>
                                        <input type="text" defaultValue="Deja aqui un comentario de tu propiedad" required name="description" id="description"/>
                                    </div>
                                </div>                           
                                <div className="add-atributes">
                                    <h6>Agregar Atributos</h6>    
                                    <div className="add-atributes-icon">
                                        <div className="add-icon">
                                            <label for="name">Nombre</label>
                                            <input className="add-icon" type="name" defaultValue="Nombre" required name="name" id="name"/>
                                        </div>
                                        <div className="add-icon">
                                            <label for="icono">Icono</label>
                                            <input className="add-icon" type="icono" defaultValue="Selecione un icono" required name="icono" id="icono"/>
                                        </div>
                                        <div className="add-icon">
                                            <Link to={{ pathname: "/"}}>
                                                <button className="add-icon-button" type="submit">+</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            <h6>Politicas del Producto</h6>
                            <div className="poli-product">
                                <div className="poli-product-info">
                                    <h3>Normas de la casa</h3>
                                    <label for="normas">Descripcion</label>
                                    <input type="normas" defaultValue="Escribir aqui" required name="normas" id="normas"/>
                                </div>
                                <div className="poli-product-info">
                                    <h3>Salud y Seguridad</h3>
                                    <label for="descripcion">Descripcion</label>
                                    <input type="descripcion" defaultValue="Escribir aqui" required name="descripcion" id="descripcion"/>
                                </div>
                                <div className="poli-product-info">
                                    <h3>Politica de Cancelacion</h3>
                                    <label for="Cancelacion">Descripcion</label>
                                    <input type="Cancelacion" defaultValue="Escribir aqui" required name="Cancelacion" id="Cancelacion"/>
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
                    <div className="create-div">
                        <Link class="create" to={{ pathname: "/ProductSuccess"}}>
                            <button type="submit">Crear</button>
                        </Link>
                    </div>
                    </div>
                </form> 
            </div>
    )
}
export default AddProduct