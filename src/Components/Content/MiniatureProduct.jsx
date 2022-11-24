import React from 'react'
import { Link } from "react-router-dom";

const MiniatureProduct = (props) => {
    console.log(props.product.id)
    return (
    <div class="item">
        <div class="thumb">
            <div class="hover-content">
                <ul>
                    <Link to={{ pathname: `/product/${props.product.id}`}}>
                    <li><a href=""><i class="fa fa-eye"></i></a></li>
                    </Link>
                    <li><a href=""><i class="fa fa-star"></i></a></li>
                    <li><a href=""><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
            <img src={props.product.images[0].url} className="image-carusel" alt={props.product.images[0].title} />
        </div>
        <div class="down-content">
            <h4>{props.product.city.name}</h4>
            <span>${Math.floor(Math.random() * 1000)} por noche</span>
            <span className="carrusel-category">{props.product.category.title}</span>
            <ul class="stars">
                <li><i class="fa fa-star"></i>{Math.floor(Math.random() * 10)}</li>
            </ul>
        </div>
    </div>
  )
}

export default MiniatureProduct