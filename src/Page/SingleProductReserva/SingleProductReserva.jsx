
import "../../Style/single-product.css"
import "../../Style/bootstrap.min.css"

import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';
import ProductCalendar from '../../Components/Header/ProductCalendar';

function SingleProduct() {
    const productId = useParams().id
    const [singleProduct, setSingleProduct] = useState({
        "id": "",
        "name": "",
        "description": "",
        "images": [{
        "id": "",
        "title": "",
        "url": ""
        }],
        "category": {
        "id": "",
        "title": "",
        "description": "",
        "image": {
            "id": "",
            "title": "",
            "url": ""
        }
        },
        "city": {
        "id": "",
        "name": "",
        "shortName": ""
        },
        "policies":[{
            "id": "",
            "title":"",
            "description":""
        }],
        "details":[{
            "id":"",
            "name":""
        }]})
    /*const getProductsAxios = async () => {
        try {
            const resGet = await axios.get(`http://localhost:8080/products/${productId}`)
            setSingleProduct(resGet.data)
            console.log(resGet.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {getProductsAxios(1)}, []);*/
    
    return (
            <div className="single-product-main-reserva">
                <div className='category-single-product'>
                    <h6>{singleProduct.category.title}</h6>
                    <h3>{singleProduct.name}</h3>
                </div>
                <form>
                    <div className='form-cointainer'>
                        <div className="info-container">
                            <div className="user-data">
                                <h6>Completá tus datos</h6>
                                <div className="user-data-form">
                                    <div className="input-container">
                                        <label for="name">Nomre</label>
                                        <input type="text" defaultValue="Lucio" required name="name" id="name"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="lastName">Apellido</label>
                                        <input type="text" defaultValue="Dipre" required name="lastName" id="lastName"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="email">Correo Electrónico</label>
                                        <input type="text" defaultValue="luciodipre@gmail.com" required name="email" id="email"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="city">Ciudad</label>
                                        <input type="text" defaultValue="Córdoba" required name="city" id="city"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="reservation-calendar">
                                <h6>Seleccioná tu fecha de reserva</h6>    
                                <div className="Fecha-disponible">
                                    {/*<ProductCalendar></ProductCalendar>*/}
                                </div>
                            </div>
                            <div className="policies">
                                <h6>"Políticas de reserva"</h6>
                                <p>random text</p>
                            </div>
                        </div>
                        <div className="detail-container">
                            <div className="detail-container-sub">
                                <h6>Detalle de la reserva</h6>
                                <div className="image-detail">
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" alt="image" />
                                </div>
                                <div className="category">Hotel</div>
                                <div className="name">Hotel Las 3 Marías</div>
                                <div className="starts">5 Estrellas</div>
                                <div className="ubicacion">Mar del Plata</div>
                                <div className="check-in">
                                    <span>Check in</span>
                                    <span>23/11/2022</span>
                                </div>
                                <div className="check-out">
                                    <span>Check out</span>
                                    <span>29/11/2022</span>
                                </div>
                                <button type="submit">Confirmar Reserva</button>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
    )
}
export default SingleProduct;