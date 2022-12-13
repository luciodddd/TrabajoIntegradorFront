
import "../../Style/single-product.css"
import "../../Style/bootstrap.min.css"

import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import axios from 'axios';
import ProductCalendar from '../../Components/Header/ProductCalendar';
import {PRODUCT_BY_ID,BOOKING} from "../../JSON/apiManagement.js";
import Policy from "../../Components/Content/Policy";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format'
import { addDays, subDays } from 'date-fns'
import { DateRange} from 'react-date-range';

function SingleProduct() {
    const [range, setRange] = useState([
        {
        startDate: new Date(),
        endDate: addDays(new Date(),7),
        key: 'selection'
        }
    ])
    const productId = useParams().id
    const [singleProduct, setSingleProduct] = useState()
    const getProductsAxios = async () => {
        try {
            const resGet = await axios.get(PRODUCT_BY_ID+productId)
            setSingleProduct(resGet.data)
        } catch (error) {
            console.log(error);
        }}
        useEffect(() => {getProductsAxios()}, []);

    const postBooking = async (booking) => {
        try {
            console.log(booking)
            const resImage = await axios.post(BOOKING,booking)
        } catch (error) {console.log(error)}}

    const policies = (singleProduct!=null)?(singleProduct.policies.map(pol => {return(
        <Policy pol={pol}></Policy>
    )})):""
    
    // Submit del form:
    const handleSubmit = (e) => {
        e.preventDefault()
        const bookingBody = {
            from: format(range[0].startDate, "yyyy-MM-dd").toString(),
            to: format(range[0].endDate, "yyyy-MM-dd").toString(),
            productId: parseInt(productId)}
        console.log(bookingBody)
        postBooking(bookingBody)}

    return (
            <div className="single-product-main-reserva">
                <div className='header-reservas'>
                    <div className='category-single-product'>
                        {(singleProduct!=null)?(<h6>{singleProduct.category.title}</h6>):""}
                        {(singleProduct!=null)?(<h3>{singleProduct.name}</h3>):""}
                    </div>
                    <div className="div-button-mis-reservas">
                        <button href="/MisReservas" type="submit" className="button-mis-reservas">Mis Reservas</button>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-cointainer'>
                        <div className="info-container">
                            <div className="user-data">
                                <h6>Completá tus datos</h6>
                                <div className="user-data-form">
                                    <div className="input-container">
                                        <label for="name">Nombre</label>
                                        <input type="text" placeholder="Name" required name="name" id="name"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="lastName">Apellido</label>
                                        <input type="text" placeholder="Apellido" required name="lastName" id="lastName"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="email">Correo Electrónico</label>
                                        <input type="text" placeholder="email" required name="email" id="email"/>
                                    </div>
                                    <div className="input-container">
                                        <label for="city">Ciudad</label>
                                        <input type="text" placeholder="Ciudad" required name="city" id="city"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="reservation-calendar">
                                <h6>Seleccioná tu fecha de reserva</h6>    
                                <DateRange
                                date={ new Date()}
                                //onChange={handleDateSelect}
                                onChange = {item => {setRange([item.selection])}}
                                editableDateInputs={true}
                                moveRangeOnFirstSelection={false}
                                ranges={range}
                                months={2}
                                direction='horizontal'
                                className='calendarElement'
                            />
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
                                    <span>{format(range[0].startDate, "yyyy-MM-dd")}</span>
                                </div>
                                <hr />
                                <div className="check-out">
                                    <p>Check out</p>
                                    <span>{format(range[0].endDate, "yyyy-MM-dd")}</span>
                                </div>
                                <hr />
                                    <button type="submit">Confirmar reserva</button>
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