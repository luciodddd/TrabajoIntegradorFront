// IMPORT CSS//
import "../../Style/bootstrap.min.css"
import "../../Style/styles.css"
import "../../Style/home.css"
import "../../Style/index.css"
import "../../Style/single-category.css"

import "../../JSON/apiManagement.js"
import React, {useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';
import Searcher from "../../Components/Header/Searcher"
import Categories from '../../Components/Content/Categories';
import MiniatureProduct from "../../Components/Content/MiniatureProduct"
import { ALL_CATEGORIES, ALL_CITIES,PRODUCT_BY_CATEGORY } from "../../JSON/apiManagement.js";



function Home() {
    // Logica js
    const [categoriesId, setCategoriesId] = useState(parseInt(useParams().id));
    const [categories, setCategories] = useState([]);
    const [cities, setCities] = useState([]);
    const getCategoriesAxios = async () => {
        try {
            const resGet = await axios.get(ALL_CATEGORIES)
            setCategories(resGet.data)
            const resGetCity = await axios.get(ALL_CITIES)
            setCities(resGetCity)  
        } catch (error) {
            console.log(error);
        }
    }

    // Conexión productos:
    const [allProducts, setAllProducts] = useState([]);
    
    const getProductsAxios = async () => {
        try {
            const resGet = await axios.get(`${PRODUCT_BY_CATEGORY}?categoryId=${categoriesId}`)
            setAllProducts(resGet.data)
            console.log(resGet.data)
        } catch (error) {
            console.log(error);
        }
    }

    const changeCategoryHandler = (id) => {
        setCategoriesId(parseInt(id))
        
        console.log(id)
    }
    useEffect(() => {
        getCategoriesAxios()
        getProductsAxios()
    },[categoriesId]);
    useEffect(() => {
        getCategoriesAxios()
        getProductsAxios()
    },[]);

    let categorySection = categories.map(category => {
        return(<Categories handler={changeCategoryHandler} category={category} key={category.id} active={categoriesId===category.id}/>)
    })

    const displayItems = ((allProducts[0]!=null)?allProducts.map(e => {
        return(<MiniatureProduct product={e} key={e.id}/>)}):"")




    return (
    <div className="home-main">
        <section class="section search-categoria">
            <div>
                <h1 className='search-title'>Busca ofertas en hoteles, casas y mucho más</h1>
            </div>
            <div class="container-searcher">
                <Searcher cities={cities}></Searcher>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-heading">
                            <h2>Buscar por tipo de alojamiento</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row" id="categories-container">
                    {categorySection}
                </div>
            </div>
        </section>
            <div className="product-by-category-display">
                {displayItems}
            </div>
        <section class="section" id="products">

        </section>
        
        
    </div>)
}



export default Home;