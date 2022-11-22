
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
                    {/* <h6>{singleProduct.category.title}</h6>
                    <h3>{singleProduct.name}</h3> */}
                    <h6>Hotel</h6>
                    <h3>Las Tres Marias</h3>
                </div>
                <form>
                    <div className='form-cointainer'>
                        <div className="info-container">
                            <div className="user-data">
                                <h6>Completá tus datos</h6>
                                <div className="user-data-form">
                                    <div className="input-container">
                                        <label for="name">Nombre</label>
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
                                <ProductCalendar></ProductCalendar>
                            </div>
                            <div className="horario">
                                <h6>Tu horario de llegada</h6>
                                <div className="horario-input">
                                    <h5>Tu habitacion va a estar lista para el check in entre las 9:00 AM y las 11:00 PM</h5>
                                    <p>Indica tu horario estimado de llegada</p>
                                </div>
                            </div>
                        </div>
                        <div className="detail-container">
                            <div className="detail-container-sub">
                                <h6>Detalle de la reserva</h6>
                                <div className="image-detail">
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" alt="image" />
                                </div>
                                <div className="category">HOTEL</div>
                                <div className="name">Hotel Las 3 Marías</div>
                                <div className="stars">5 Estrellas</div>
                                <div className="ubicacion">Avenida Colon 167, Mar del Plata, Buenos Aires, Argentina</div>
                                <hr />
                                <div className="check-in">
                                    <p>Check in</p>
                                    <span>23/11/2022</span>
                                </div>
                                <hr />
                                <div className="check-out">
                                    <p>Check out</p>
                                    <span>29/11/2022</span>
                                </div>
                                <hr />
                                <button type="submit">Confirmar reserva</button>
                            </div>
                        </div>
                    </div>
                </form> 
                <div className="linea"><hr /></div>
                <div className="policies">
                    <h6>Que tenes que saber</h6>
                    <p>Aqui irian las politicas de reserva</p>
                </div> 
            </div>
    )
}
export default SingleProduct;