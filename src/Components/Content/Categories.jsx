import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ALL_CATEGORIES,PRODUCT_BY_CATEGORY, IMAGES } from "../../JSON/apiManagement.js";

const Categories = (props) => {

    const categoryId = props.category.id
    const imageId = props.category.imageUrl
    const [allProducts, setAllProducts] = useState([]);
    const [categoryImage, setCategoryImage] = useState("");
    
    const handler = props.handler

    const getProductsAxios = async () => {
        try {
            const resGet = await axios.get(`${PRODUCT_BY_CATEGORY}?categoryId=${categoryId}`)
            setAllProducts(resGet.data)
            const resImage = await axios.get(`${IMAGES}/${imageId}`)
            setCategoryImage(resImage.data.url)
        } catch (error) {
            console.log(error);
        }}

    useEffect(() => {
      getProductsAxios()
  }, []);


    return (
    <div className='individual-category' onClick={() => handler(props.category.id)}
    style={{backgroundColor: (props.active===true) ? '#1dbeb4' : '',
      color: (props.active===true) ? 'white' : ''}}>
      <Link to={{ pathname: `/categoria/${props.category.id}`}}>
        <img src = {categoryImage} alt={props.category.title}></img>
        <h2>{props.category.title}</h2>
        <span>{allProducts.length} Alojamientos</span>
      </Link>
    </div>
  )
}

export default Categories