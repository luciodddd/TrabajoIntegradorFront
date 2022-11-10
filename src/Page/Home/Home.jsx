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
    const getCategoriesAxios = async () => {
        try {
            const resGet = await axios.get('http://192.168.100.34:8080/categories')
            setCategories(resGet.data)
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCategoriesAxios(6)
    }, []);

    const categorySection = categories.map(e => {
        return(<Categories filter={activeCategoryFilter} category={e} key={e.id} active={categoryFilter}/>)
    })

    // Conexión productos:
    const [randomProducts, setRandomProducts] = useState([]);
    const [Products, setProducts] = useState([]);
    const getProductsAxios = async () => {
        try {
            const resGet = await axios.get('http://192.168.100.34:8080/products')
            const shuffledResponse = resGet.data.sort(() => 0.5 - Math.random());
            let selectedProducts = shuffledResponse.slice(0, 4);
            setRandomProducts(selectedProducts)
            setProducts(resGet.data)
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductsAxios(6)
    }, []);

    useEffect(() => {
        console.log("re-render")

        console.log(categoryFilter)
    }, [categoryFilter]);

    

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