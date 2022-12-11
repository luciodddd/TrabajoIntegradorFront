import React from 'react'
import { Link } from "react-router-dom";
import { FaRegStar , FaSuitcaseRolling} from 'react-icons/fa';
import { BsFillPlusCircleFill } from "react-icons/bs";

const MiniatureProduct = (props) => {
    console.log(props.product)
    return (
    <div class="item">
        <div class="thumb">
            <div class="hover-content">
                <ul>
                    <Link to={{ pathname: `/product/${props.product.id}`}}>
                    <li><a href=""><BsFillPlusCircleFill /></a></li>
                    </Link>
                    <Link to={{ pathname: `/reservas/${props.product.id}`}}>
                    <li><a href=""><FaSuitcaseRolling /></a></li>
                    </Link>
                </ul>
            </div>
            <img src={(props.product.images[0]!=null)?props.product.images[0].url:""} className="image-carusel" alt={(props.product.images[0]!=null)?props.product.images[0].title:""} />
        </div>
        <div class="down-content">
            <h4>{props.product.city.name}</h4>
            <span>${Math.floor(Math.random() * 1000)} por noche</span>
            <span className="carrusel-category">{props.product.category.title}</span>
            <ul class="stars">
                <li>{Math.floor(Math.random() * 10)}<FaRegStar /></li>
            </ul>
        </div>
    </div>)
}

export default MiniatureProduct