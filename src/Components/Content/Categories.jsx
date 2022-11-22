import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ALL_CATEGORIES, ALL_CITIES, ALL_PRODUCTS } from "../../JSON/apiManagement.js";

const Categories = (props) => {
    const activeCategory = props.category.id
    const [isActive, setIsActive] = useState(props.active);
    
    const categoryId = props.category.id
    const [allProducts, setAllProducts] = useState([]);
    
    const getProductsAxios = async () => {
        try {
            const resGet = await axios.get(ALL_PRODUCTS,{params: {categoryId}})            
            setAllProducts(resGet.data)
            console.log(resGet.data)
        } catch (error) {
            console.log(error);
        }}

    useEffect(() => {
      getProductsAxios()
  }, []);


    return (
    
    <div className='individual-category'
    style={{
      backgroundColor: (isActive===props.category.title) ? 'black' : '',
      color: (isActive===props.category.title) ? 'white' : '',
    }}
    >
      <Link to={{ pathname: `/categoria/${props.category.id}`}}>
        <img src = {props.category.image.url}></img>
        <h2>{props.category.title}</h2>
        <span>x hoteles</span>
        </Link>
    </div>
    
  )
}

export default Categories