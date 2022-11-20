
import "../../Style/single-product.css"
import "../../Style/bootstrap.min.css"

import "../../JSON/apiManagement.js"
import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';
import ProductCalendar from '../../Components/Header/ProductCalendar';
import { PRODUCT_BY_ID } from "../../JSON/apiManagement.js"

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
        }]});
    const getProductsAxios = async () => {
        try {
            const resGet = await axios.get(`${PRODUCT_BY_ID}${productId}`)
            setSingleProduct(resGet.data)
            console.log(resGet.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {getProductsAxios(1)}, []);
    
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
                        <div className='image-gallery'><img  src={singleProduct.images[1].url} alt={singleProduct.images[1].name} /></div>
                        <div className='image-gallery'><img  src={singleProduct.images[2].url} alt={singleProduct.images[2].name} /></div>
                        <div className='image-gallery'><img  src={singleProduct.images[3].url} alt={singleProduct.images[3].name} /></div>
                        <div className='image-gallery'><img  src={singleProduct.images[4].url} alt={singleProduct.images[4].name} /></div>
                    </div>
                </section>
                <div className="description-single-product">
                    <h6>{singleProduct.description}</h6>
                </div>
                <div className="Fecha-disponible">
                    <h6>Fechas Disponibles</h6>
                    <ProductCalendar></ProductCalendar>
                </div>
            </div>
    )
}
export default SingleProduct;