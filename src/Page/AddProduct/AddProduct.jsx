import "../../Style/add-product.css"
import "../../Style/bootstrap.min.css"

import React, {useState, useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from 'axios';
import { ALL_CATEGORIES, ALL_CITIES, ALL_CHARACTERISTICS,CREATE_PRODUCT,IMAGES,ALL_POLOCIES} from "../../JSON/apiManagement.js";
import { FaWifi , FaSwimmer,FaCoffee,FaUtensils,FaSnowflake,FaSmokingBan,FaCocktail,FaPaw,FaCar,FaConciergeBell,FaDumbbell,FaSpa,FaTv} from 'react-icons/fa';
import swal from "sweetalert"


function AddProduct() {

    // Variables
    const [categories, setCategories] = useState([]);
    const [cities, setCities] = useState([]);
    const [details, setDetails] = useState([]);
    const [detailsSelected, setDetailsSelected] = useState([]);
    const [images, setImages] = useState([]);
    const [policies,setPolicies] = useState([])
    const navigate = useNavigate()

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
        try {
            const resImage = await axios.delete(IMAGES+`/${imageId}`)
            setImages(images.filter(img => img.id !== parseInt(imageId)))
        } catch (error) {console.log(error)}}

    const postProductAxios = async () => {
        try {
            const resProduct = await axios.post(CREATE_PRODUCT,bodyContructor())
            const forms = document.getElementById('post-product-form')
            if(resProduct.status===200){
                forms.reset()
                window.scroll({
                    top: 0,
                    left: 0,});
                swal({
                    title: "Producto creado con Éxito!",
                    icon: "success",
                    button: "Cerrar"
                })
            }
            setImages([])
        } catch (error) {
            swal({
                title: "Algo anda mal!",
                text: "Revise sus datos y vuelva a intentarlo",
                icon: "error",
                button: "Cerrar"
            })
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
            let newIdDetail = parseInt(e.target.value)
            setDetailsSelected([...detailsSelected, newIdDetail])
        }
        else {
            setDetailsSelected(detailsSelected.filter(det => det !== e.target.value))
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        bodyContructor()
        postProductAxios()
    }

    const postPolicies = () => {
        const policyList = document.querySelectorAll('.policy-input')
        const policyArray = Array.prototype.slice.call(policyList);
        const policiesPost = policyArray.map(policy => {
            const temp = {"title": policy.title,
            "description": policy.value}
            return (temp)
            })
        /*policyArray.map(pol => {
            postPoliciesAxios(pol)})*/
        return policiesPost.filter(function(x){
            return x.description!==""
        })
    }

    const bodyContructor = () => {
        const name = document.getElementById('name').value
        const description = document.getElementById('description').value
        const categoryID = parseInt(document.getElementById('category').value)
        const cityID = parseInt(document.getElementById('city').value)
        const detailID = detailsSelected
        const policyID = postPolicies()
        const imageID = images.map(el => {return(el.id)})
        const address = document.getElementById('address').value
        const body = {
            'cityId': cityID,
            'address': address,
            'categoryId': categoryID,
            'imageIds': imageID,
            'detailIds': detailID,
            'policies': policyID,
            'name': name,
            'description': description
        }
        return body
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
                return <FaWifi className="service-icon" size={18} color='#545776' />
            case 'Pileta':
                return <FaSwimmer className="service-icon swimmer-icon" size={18} color='#545776' />
            case 'Desayuno':
                return <FaCoffee className="service-icon" size={18} color='#545776'/>
            case 'Cocina':
                return <FaUtensils className="service-icon" size={18} color='#545776'/>
            case 'Aire acondicionado':
                return <FaSnowflake className="service-icon" size={18} color='#545776'/>
            case 'Prohibido fumar':
                return <FaSmokingBan className="service-icon" size={18} color='#545776'/>
            case 'Bar':
                return <FaCocktail className="service-icon" size={18} color='#545776'/>
            case 'Apto mascotas':
                return <FaPaw className="service-icon" size={18} color='#545776'/>
            case 'Estacionamiento gratuito':
                return <FaCar className="service-icon" size={18} color='#545776'/>
            case 'Servicio a cuarto':
                return <FaConciergeBell className="service-icon" size={18} color='#545776' />
            case 'Gimnacio':
                return <FaDumbbell className="service-icon" size={18} color='#545776'/>
            case 'Spa':
                return <FaSpa className="service-icon" size={18} color='#545776'/>
            case 'Televisor':
                return <FaTv className="service-icon" size={18} color='#545776'/>
            default:
                return
        }}
    const citiesList = cities.map(city => {
        const dict = {
            'label': city.name,
            'value': city.id
        }
        return(dict)})
        
    return (
            <div className="frame-add-product">
                <hr />
                <hr />
                <div className='section-title'>
                    <hr />
                    <h1>Administracion</h1>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} id="post-product-form">
                    <div className='form-cointainer1'>
                        <div className="info-cointainer1">
                            <h6>Crear Propiedad</h6>
                            <div className="users-data">
                                <div className="users-data-form">
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
                                        <input type="text" placeholder="Dirección" required name="address" id="address"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="city">Ciudad</label>
                                        {/*<ScrollDown cities={citiesList}></ScrollDown>*/}
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
                                <div><h6>Agregar Atributos</h6></div>
                                <div className="add-atributes-icon"><div className="atributes-icon">{detailsList}</div></div>
                                    {/*detailsExtra*/}
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
                            <h6>Politicas del Producto</h6>
                            <div className="poli-product">
                                <div className="poli-product-info">
                                    <h3>Normas de la casa</h3>
                                    <label for="normas">Descripcion</label>
                                    <input type="normas" placeholder="Escribir aqui" name="normas" id="normas" className="policy-input" title="Normas"/>
                                </div>
                                <div className="poli-product-info">
                                    <h3>Salud y Seguridad</h3>
                                    <label for="descripcion">Descripcion</label>
                                    <input type="descripcion" placeholder="Escribir aqui" name="saludSeguridad" id="saludSeguridad" className="policy-input" title="Política de Salud y Seguridad"/>
                                </div>
                                <div className="poli-product-info">
                                    <h3>Politica de Cancelacion</h3>
                                    <label for="Cancelacion">Descripcion</label>
                                    <input type="Cancelacion" placeholder="Escribir aqui" name="Cancelacion" id="Cancelacion" className="policy-input" title="Política de cancelación"/>
                                </div>
                            </div>
                            <h6>Cargar Imagenes</h6>
                            <div className="Add-imagenes">
                            {imageList}
                            <input type="url" placeholder="https://" name="url" id="url"/>
                            <button class="button" type="button" onClick={(e) => uploadImage(e)}>+</button>
                            </div>
                        </div>
                        <div className="Button-crear">
                            <input clasName='create button' type="submit" value="Crear"/>
                        </div>
                    </div>
                </form> 
            </div>
    )
}
export default AddProduct