import React, {useState,useEffect} from 'react'
import CarruselProducts from '../../Components/Content/CarruselProducts';
import Searcher from '../../Components/Header/Searcher';
import axios from 'axios';
import Categories from '../../Components/Content/Categories';


function Home() {

    // Logica js
    
    // Filtro categorías

    const [categoryFilter,setCategoryFilter] = useState("")

    function activeCategoryFilter(title){
        setCategoryFilter(title)
    }

    // Conexión Categorias
    const [categories, setCategories] = useState([]);

    const getNameAxios = async () => {
        try {
            const resGet = await axios.get('http://192.168.100.34:8080/categories')
            setCategories(resGet.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getNameAxios(6)
    }, []);

    useEffect(() => {
        console.log("re-render")

        console.log(categoryFilter)
    }, [categoryFilter]);

    const categorySection = categories.map(e => {
        return(<Categories filter={activeCategoryFilter} imageUrl={e.imageUrl} title={e.title} description={e.description} key={e.id} active={categoryFilter}/>)
    })

    //


    return (
    <div className="home-main">
        <section class="section search-categoria">
            <div>
                <h1 className='search-title'>Busca ofertas en hoteles, casas y mucho más</h1>
            </div>
            <div class="container-searcher">
                <Searcher></Searcher>
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
        {/*
        <section class="section" id="carrusel">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="section-heading">
                              <h2>Ubicaciones destacadas</h2>
                              <span>¿Aún no sabes a dónde ir?</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="row">
                    <CarruselProducts data={products}></CarruselProducts>
                  </div>
              </div>
        </section>
        */}
        
    </div>)
}



export default Home;