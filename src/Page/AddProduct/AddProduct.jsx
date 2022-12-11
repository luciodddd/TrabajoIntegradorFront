import "../../Style/add-product.css"
import "../../Style/bootstrap.min.css"

import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import { ALL_CATEGORIES, ALL_CITIES, ALL_CHARACTERISTICS,CREATE_PRODUCT,IMAGES,ALL_POLOCIES} from "../../JSON/apiManagement.js";
import { FaWifi , FaSwimmer,FaCoffee,FaUtensils,FaSnowflake,FaSmokingBan,FaCocktail,FaPaw,FaCar,FaConciergeBell,FaDumbbell,FaSpa,FaTv} from 'react-icons/fa';

function AddProduct() {

    // Variables
    const [categories, setCategories] = useState([]);
    const [cities, setCities] = useState([]);
    const [details, setDetails] = useState([]);
    const [detailsSelected, setDetailsSelected] = useState([]);
    const [images, setImages] = useState([]);
    const [policies,setPolicies] = useState([])
    //const [detailsExtra, setDetailsExtra] = useState([]);

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

    const postImagesAxios = async () => {
        const imageUrl = document.getElementById('url');
        const imageBody = {"imageUrl": imageUrl.value,
                            "title": "Imagen del producto"}
        try {
            const resImage = await axios.post(IMAGES,imageBody)
            setImages([...images,resImage.data])
        } catch (error) {console.log(error)}
        imageUrl.value = ""}

    const postPoliciesAxios = async (policy) => {
        const bodyPolicy = {
            "title": policy.name,
            "description": policy.value
        }
        try {
            const resPolicy = await axios.post(ALL_POLOCIES,bodyPolicy)
            setPolicies([...policies,resPolicy.data.id])
        } catch (error) {console.log(error)}}

        
    const deleteImageAxios = async (e) => {
        const imageId = e.target.id
        console.log(imageId)
        try {
            const resImage = await axios.delete(IMAGES+`/${imageId}`)
            console.log(resImage)
            setImages(images.filter(img => img.id !== imageId))
        } catch (error) {console.log(error)}}

    const postProductAxios = async () => {
        try {
            const resCategories = await axios.post(CREATE_PRODUCT,bodyContructor)
            console.log(resCategories)
        } catch (error) {
            console.log(error);
        }}

    useEffect(() => {
        getCategoriesAxios()
    }, []);
    
    // HANDLERS:
    const uploadImage = (e) => {
        postImagesAxios()
    }

    const detailHandler = (e) => {
        if (e.target.checked === true) {
            let newIdDetail = e.target.value
            setDetailsSelected([...detailsSelected, newIdDetail])
        }
        else {
            setDetailsSelected(detailsSelected.filter(det => det !== e.target.value))
        }
        console.log(detailsSelected)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        postPolicies()
        bodyContructor()
        //postProductAxios()

    }

    const postPolicies = () => {
        const policyList = document.querySelectorAll('#policy')
        const policyArray = Array.prototype.slice.call(policyList);
        policyArray.map(pol => {
            postPoliciesAxios(pol)})
        console.log(policies)
    }

    const bodyContructor = () => {
        const name = document.getElementById('name').value
        const description = document.getElementById('description').value
        const categoryID = document.getElementById('category').value
        const cityID = document.getElementById('city').value
        const detailID = detailsSelected
        const policyID = policies
        const imageID = images.map(el => {return(el.id)})
        console.log(imageID)
        const body = {
            'cityID': cityID,
            'categoryID': categoryID,
            'imageIds': imageID,
            'detailIds': detailID,
            'policyIds': policyID,
            'name': name,
            'description': description
        }
        console.log(body)
        return body
    }



    const addCategory = () => {
    }
    
    // AGREGAR ELEMENTOS DINÁMICAMENTE:

    const categoryList = categories.map(e => {
        return(<option key={e.id} value={e.id}>{e.title}</option>)})
    const cityList = cities.map(e => {
        return(<option key={e.id} value={e.id}>{e.name}</option>)})
    const detailsList = details.map(e => {
        return(<span class="details-box"><input type="checkbox" class="checkboxDetails" id={e.id} name={e.id} value={e.id} onChange={(e)=>detailHandler(e)}/>{parseIcons(e.name)}
            <label for={e.id}> {e.name}</label></span>)})
    const imageList = images.map((el,index) => {
        return(<div><span>Imagen {index+1}</span>
                <button class="button-delete" key={el.id} id={el.id} type="button" onClick={(e) => deleteImageAxios(e)}>Eliminar</button></div>)})
    function parseIcons(icon) {
        switch (icon) {
            case 'wi-fi':
                return <FaWifi className="service-icon" />
            case 'Pileta':
                return <FaSwimmer className="service-icon swimmer-icon" />
            case 'Desayuno':
                return <FaCoffee className="service-icon" />
            case 'Cocina':
                return <FaUtensils className="service-icon" />
            case 'Aire acondicionado':
                return <FaSnowflake className="service-icon" />
            case 'Prohibido fumar':
                return <FaSmokingBan className="service-icon" />
            case 'Bar':
                return <FaCocktail className="service-icon" />
            case 'Apto mascotas':
                return <FaPaw className="service-icon" />
            case 'Estacionamiento gratuito':
                return <FaCar className="service-icon" />
            case 'Servicio a cuarto':
                return <FaConciergeBell className="service-icon" />
            case 'Gimnacio':
                return <FaDumbbell className="service-icon" />
            case 'Spa':
                return <FaSpa className="service-icon" />
            case 'Televisor':
                return <FaTv className="service-icon" />
            default:
                return
        }}
    return (
            <div className="frame-add-product">
                <hr />
                <hr />
                <div className='section-title'>
                    <hr />
                    <h1>Administracion</h1>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
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
                                    {/*detailsExtra*/}
                                    </div>
                                    {/*<div className="input-container">
                                        <label for="icono">Agregar Característica</label>
                                        <input type="text" placeholder="Característica" name="addDetail" id="addDetail"/>
                                        <div onClick={addCategory}>a</div>
                                    </div>
                                    <div className="input-container">
                                        <Link class="add-icon" to={{ pathname: "/"}}>
                                            <button type="submit" onSubmit={handleSubmit}>+</button>
                                        </Link>
                                    </div>*/}
                                </div>
                            </div>
                            <h6>Politicas del Producto</h6>
                            <div className="poli-product">
                                <div className="poli-product-info">
                                    <h3>Normas de la casa</h3>
                                    <label for="normas">Descripcion</label>
                                    <input type="normas" placeholder="Escribir aqui" required name="normas" id="normas"/>
                                </div>
                                <div className="poli-product-info">
                                    <h3>Salud y Seguridad</h3>
                                    <label for="descripcion">Descripcion</label>
                                    <input type="descripcion" placeholder="Escribir aqui" required name="saludSeguridad" id="saludSeguridad"/>
                                </div>
                                <div className="poli-product-info">
                                    <h3>Politica de Cancelacion</h3>
                                    <label for="Cancelacion">Descripcion</label>
                                    <input type="Cancelacion" placeholder="Escribir aqui" required name="Cancelacion" id="Cancelacion"/>
                                </div>
                            </div>
                            <h6>Cargar Imagenes</h6>
                            {imageList}
                            {(images.length<5)?(<div className="Add-imagenes">
                                <input type="url" placeholder="https://" required name="url" id="url"/>
                                <button class="button" type="button" onClick={(e) => uploadImage(e)}>+</button>
                            </div>):<span>Solamente se pueden cargar 5 imágenes por producto</span>}
                        </div>
                    </div>
                        <input type="submit" value="Crear"/>
                </form> 
            </div>
    )
}
export default AddProduct