import "../../Style/add-product.css"
import "../../Style/bootstrap.min.css"

import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import { ALL_CATEGORIES, ALL_CITIES, ALL_CHARACTERISTICS,CREATE_PRODUCT} from "../../JSON/apiManagement.js";


function AddProduct() {

    // Variables
    const [categories, setCategories] = useState([]);
    const [cities, setCities] = useState([]);
    const [details, setDetails] = useState([]);
    const [detailsExtra, setDetailsExtra] = useState([]);
    const [detailsSelected, setDetailsSelected] = useState([]);

    // Conexión
    const getCategoriesAxios = async () => {
        try {
            const resCategories = await axios.get(ALL_CATEGORIES)
            const resCities = await axios.get(ALL_CITIES)
            const resDetails = await axios.get(ALL_CHARACTERISTICS)
            setCategories(resCategories.data)
            setCities(resCities.data)
            setDetails(resDetails.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCategoriesAxios()
    }, []);
    
    const detailHandler = (e) => {
        
        if (e.target.checked === true) {
            console.log("hola")
            setDetailsSelected(...detailsSelected, e.target.value)
        }
        else {
            setDetailsSelected(detailsSelected.filter(det => det !== e.target.value))
        }
        console.log(detailsSelected)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
        postProductAxios()
    }

    const bodyContructor = () => {
        const name = document.getElementById('name')
        const description = document.getElementById('description')
        const categoryID = document.getElementById('category')
        const cityID = document.getElementById('city')
        const detailID = detailsSelected
        const policyID = []
        const imageID = []

        const body = {
            'cityID': cityID,
            'categoryID': categoryID,
            'imageIds': imageID,
            'detailIds': detailID,
            'policyIds': policyID,
            'name': name,
            'description': description
        }
        return body
    }

    const postProductAxios = async () => {
        try {
            const resCategories = await axios.post(CREATE_PRODUCT,bodyContructor)
            console.log(resCategories)
        } catch (error) {
            console.log(error);
        }
    }

    const addCategory = () => {
    }
    
    // AGREGAR ELEMENTOS DINÁMICAMENTE:

    const categoryList = categories.map(e => {
        return(<option key={e.id} value={e.id}>{e.title}</option>)})
    const cityList = cities.map(e => {
        return(<option key={e.id} value={e.id}>{e.name}</option>)})
    const detailsList = details.map(e => {
        return(<span class="details-box"><input type="checkbox" class="checkboxDetails" id={e.id} name={e.id} value={e.id} onChange={(e)=>detailHandler(e)}/>
            <label for={e.id}> {e.name}</label></span>)})

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
                                        <input type="text" placeholder="Nombre de la propiedad" required name="name" id="name"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="categoria">Categoria</label>
                                        <select type="select" required name="category" id="category">
                                        {categoryList}</select>
                                    </div>
                                    <div className="input-container">
                                        <label for="adrress">Direccion</label>
                                        <input type="text" placeholder="Dirección" required name="adress" id="adress"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="city">Ciudad</label>
                                        <select type="select" required name="city" id="city">
                                        {cityList}</select>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label for="description">Descripcion</label>
                                    <input type="text" placeholder="Deja aqui un comentario de tu propiedad" required name="description" id="description"/>
                                </div>
                            </div>                           
                            <div className="add-atributes">
                                <h6>Agregar Atributos</h6>    
                                <div className="add-atributes-icon">
                                    <div className="input-container">
                                    {detailsList}
                                    {detailsExtra}
                                    </div>
                                    <div className="input-container">
                                        <label for="icono">Agregar Característica</label>
                                        <input type="text" placeholder="Característica" name="addDetail" id="addDetail"/>
                                        <div onClick={addCategory}>a</div>
                                    </div>
                                    <div className="input-container">
                                        <Link class="add-icon" to={{ pathname: "/"}}>
                                            <button type="submit" onSubmit={handleSubmit}>+</button>
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
                                    {/*<button type="submit" onSubmit={handleSubmit}>+</button>*/}
                                </Link>
                            </div>
                        </div>
                    </div>
                        <button type="submit" onSubmit={(e)=>{handleSubmit(e)}}>Crear</button>
                </form> 
            </div>
    )
}
export default AddProduct