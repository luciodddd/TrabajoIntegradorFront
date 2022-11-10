import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "../../Style/header.css"
import axios from 'axios';

function SingleProduct() {
    const productId = useParams().id
    const [singleProduct, setSingleProduct] = useState({
        "id": "",
        "name": "",
        "description": "",
        "image": {
          "id": "",
          "title": "",
          "url": ""
        },
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
        }
      });
    const getProductsAxios = async () => {
        try {
            const resGet = await axios.get(`http://192.168.100.34:8080/products/${productId}`)
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
                <section className='gallery-single-product'>
                    <div className="left-half-image">
                        <img src={singleProduct.image.url} alt={singleProduct.image.name}></img>
                    </div>
                    <div className="right-half-image">
                        <div className='image-gallery'><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="placeholder" /></div>
                        <div className='image-gallery'><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="placeholder" /></div>
                        <div className='image-gallery'><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="placeholder" /></div>
                        <div className='image-gallery'><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="placeholder" /></div>
                    </div>
                </section>
                <div className="description-single-product">
                    <h6>{singleProduct.description}</h6>
                </div>
            </div>
    )
}
export default SingleProduct;