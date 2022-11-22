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
import { ALL_CATEGORIES, ALL_PRODUCTS, ALL_CITIES } from "../../JSON/apiManagement.js";



function Home() {
    // Logica js
    const categoriesId = useParams().id
    
    // Filtro categorías

    const [categoryFilter,setCategoryFilter] = useState("")

    function activeCategoryFilter(title){
        setCategoryFilter(title)
    }

    // Conexión Categorias
    const [categories, setCategories] = useState([]);
    const [cities, setCities] = useState([]);
    const getCategoriesAxios = async () => {
        try {
            const resGet = await axios.get(ALL_CATEGORIES)
            setCategories(resGet.data)
            
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCategoriesAxios()
    }, []);

    const categorySection = categories.map(e => {
        return(<Categories filter={activeCategoryFilter} category={e} key={e.id} active={categoryFilter}/>)
    })

    // Conexión productos:
    const [allProducts, setAllProducts] = useState([]);
    
    const getProductsAxios = async () => {
        try {
            const resGet = await axios.get(ALL_PRODUCTS,null,{params: {categoriesId}})
            const resGetCity = await axios.get(ALL_CITIES)
            setAllProducts(resGet.data)
            setCities(resGetCity)
            console.log(resGet.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductsAxios()
    }, []);

    useEffect(() => {
        console.log("re-render")

        console.log(categoryFilter)
    }, [categoryFilter]);

    const displayItems = allProducts.map(e => {
        return(<MiniatureProduct product={e} key={e.id}/>)})

    // Conexión de ciudades



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