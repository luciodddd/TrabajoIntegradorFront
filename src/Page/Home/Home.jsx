// IMPORT CSS//
import "../../Style/bootstrap.min.css"
import "../../Style/styles.css"
import "../../Style/home.css"
import "../../Style/index.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../../JSON/apiManagement.js"
import React, {useState,useEffect} from 'react'
import CarruselProducts from '../../Components/Content/CarruselProducts';
import Searcher from '../../Components/Header/Searcher';
import axios from 'axios';
import Categories from '../../Components/Content/Categories';
import { ALL_CATEGORIES, ALL_CITIES, ALL_PRODUCTS } from "../../JSON/apiManagement.js";



function Home() {
    // Logica js

    // Conexión Categorias
    const [categories, setCategories] = useState([]);
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
        return(<Categories category={e} key={e.id}/>)
    })

    // Conexión productos:
    const [randomProducts, setRandomProducts] = useState([]);
    const [cities, setCities] = useState([]);
    
    const getProductsAxios = async () => {
        try {
            const resGet = await axios.get(ALL_PRODUCTS)
            const resGetCity = await axios.get(ALL_CITIES)
            const shuffledResponse = resGet.data.sort(() => 0.5 - Math.random());
            let selectedProducts = shuffledResponse.slice(0, 4);
            setRandomProducts(selectedProducts)
            setCities(resGetCity)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductsAxios()
    }, []);

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
        
        <section class="section" id="carrusel">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="section-heading">
                              <h2>Ubicaciones recomendadas</h2>
                              <span>¿Aún no sabes a dónde ir?</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="row">
                    <CarruselProducts data={randomProducts}></CarruselProducts>
                  </div>
              </div>
        </section>
        
        
    </div>)
}



export default Home;