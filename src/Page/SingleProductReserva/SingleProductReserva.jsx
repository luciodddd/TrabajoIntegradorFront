
import "../../Style/single-product.css"
import "../../Style/bootstrap.min.css"

import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import axios from 'axios';
import ProductCalendar from '../../Components/Header/ProductCalendar';
import {PRODUCT_BY_ID} from "../../JSON/apiManagement.js";
import Policy from "../../Components/Content/Policy";

function SingleProduct() {
    const productId = useParams().id
    const [singleProduct, setSingleProduct] = useState(/*{
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
        }]}*/)
    const getProductsAxios = async () => {
        try {
            const resGet = await axios.get(PRODUCT_BY_ID+productId)
            setSingleProduct(resGet.data)
        } catch (error) {
            console.log(error);
        }
    }
    const policies = (singleProduct!=null)?(singleProduct.policies.map(pol => {return(
        <Policy pol={pol}></Policy>
    )})):""
    useEffect(() => {getProductsAxios()}, []);
    
    return (
            <div className="single-product-main-reserva">
                <div className='header-reservas'>
                    <div className='category-single-product'>
                        {(singleProduct!=null)?(<h6>{singleProduct.category.title}</h6>):""}
                        {(singleProduct!=null)?(<h3>{singleProduct.name}</h3>):""}
                    </div>
                    <button href="/MisReservas" type="submit" className="button-mis-reservas">Mis Reservas</button>
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
                                    <select id="arrivingTime">
                                        <option value="9:00">9:00</option>
                                        <option value="9:30">9:30</option>
                                        <option value="10:00">10:00</option>
                                        <option value="10:30">10:30</option>
                                        <option value="11:00">11:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="detail-container">
                            <div className="detail-container-sub">
                                <h6>Detalle de la reserva</h6>
                                <div className="image-detail">
                                    {(singleProduct!=null)?(<img src={singleProduct.images[0].url}/>):""}
                                </div>
                                {(singleProduct!=null)?(<div className="category">{singleProduct.category.title}</div>):""}
                                {(singleProduct!=null)?(<div className="name">{singleProduct.name}</div>):""}
                                
                                <div className="stars">{Math.floor(Math.random() * 5)} Estrellas</div>
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
                                <Link class="home" to={{ pathname: "/ReservaSuccess"}}>
                                    <button type="submit">Confirmar reserva</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form> 
                <div className="linea"><hr /></div>
                <h6 styles="text-align:left;">Que tenes que saber</h6>
                <div className="policies">
                    {(singleProduct!=null)?(policies):""}
                    
                </div> 
            </div>
    )
}
export default SingleProduct;