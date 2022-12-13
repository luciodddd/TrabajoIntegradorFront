
import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format'
import { addDays, subDays } from 'date-fns'
import { DateRange} from 'react-date-range';
import DatePicker from 'react-multiple-datepicker'



import "../../Style/single-product.css"
import "../../Style/bootstrap.min.css"

import "../../JSON/apiManagement.js"
import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';
import ProductCalendar from '../../Components/Header/ProductCalendar';
import { PRODUCT_BY_ID } from "../../JSON/apiManagement.js"
import Button from '../../Components/Header/Button'
import Detail from '../../Components/Header/Detail'


function SingleProduct() {
    const productId = useParams().id
    const [availability,setAvailability] = useState()
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
        }]});
    const getProductsAxios = async () => {
        try {
            const resGet = await axios.get(`${PRODUCT_BY_ID}${productId}`)
            setSingleProduct(resGet.data)
            setAvailability(resGet.date.availabilities)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {getProductsAxios(1)}, []);
    let detailList = singleProduct.details.map(detail => {
        return(<Detail detail={detail} key={detail.id}/>)
    })
    
    return (
            <div className="single-product-main">
                <div className='category-single-product'>
                    <h6>{singleProduct.category.title}</h6>
                    <h3>{singleProduct.name}</h3>
                </div>
                <div className='location-single-product'>
                    <span><i class="fa fa-star"></i>{singleProduct.city.name}</span>
                    <span>A {Math.floor(Math.random() * 100)} Km del centro</span>
                </div>
                <section href="" className='gallery-single-product'>
                    <div className="left-half-image">
                        <img src={singleProduct.images[0].url} alt={singleProduct.images[0].name}></img>
                    </div>
                    <div className="right-half-image">
                        {(singleProduct.images[1]!=null)?<div className='image-gallery'><img  src={singleProduct.images[1].url} alt={singleProduct.images[1].name} /></div>:""}
                        {(singleProduct.images[2]!=null)?<div className='image-gallery'><img  src={singleProduct.images[2].url} alt={singleProduct.images[2].name} /></div>:""}
                        {(singleProduct.images[3]!=null)?<div className='image-gallery'><img  src={singleProduct.images[3].url} alt={singleProduct.images[3].name} /></div>:""}
                        {(singleProduct.images[4]!=null)?<div className='image-gallery'><img  src={singleProduct.images[4].url} alt={singleProduct.images[4].name} /></div>:""}
                    </div>
                </section>
                <div className="description-single-product">
                    <div><h6>Características</h6></div>
                    <div className="details-container">{detailList}</div>
                </div>
                <div className="description-single-product">
                    <div><h6>Descripción</h6></div>
                    <div><p>{singleProduct.description}</p></div>
                </div>
                    <h6>Fechas Disponibles</h6>
                <div className="Fecha-disponible">
                    <ProductCalendar></ProductCalendar>
                    <Button className="login-buttons single-product-button" link={`reservas/${productId}`} text="Reservar"></Button>

                </div>
            </div>
    )
}
export default SingleProduct;