import React from 'react'
import {useParams} from "react-router-dom"
import "../../Style/header.css"

function SingleProduct() {
    const productId = useParams()
    console.log(productId)
    return (
            <div className="single-product-main">
                <div className='category-single-product'></div>
                <div className='location-single-product'></div>
                <section className='galerry-single-product'>
                    <div className="left-helf-image">
                        <img src='https://www.kayak.com.ar/rimg/himg/ab/64/d9/expediav2-38713-6584af-750938.jpg?width=720&height=576&crop=true'></img>
                    </div>
                    <div className="right-helf-image"></div>
                </section>
                <div className="description-single-product"></div>
            </div>
    )
}
export default SingleProduct;