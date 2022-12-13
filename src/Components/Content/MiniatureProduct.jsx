import React from 'react'
import { Link } from "react-router-dom";
import { FaRegStar , FaSuitcaseRolling} from 'react-icons/fa';
import { BsFillPlusCircleFill } from "react-icons/bs";
import "../../Style/home.css"

const MiniatureProduct = (props) => {
    return (
    <div class="container-product">
        <div class="img-icons">
            <img src={(props.product.images[0]!=null)?props.product.images[0].url:""} className="image-carusel" alt={(props.product.images[0]!=null)?props.product.images[0].title:""} />
            <div class="products-icons">
                <ul>
                    <Link to={{ pathname: `/product/${props.product.id}`}}>
                    <li><a href=""><BsFillPlusCircleFill size={20} color='#545776'/></a></li>
                    </Link>
                    <Link to={{ pathname: `/reservas/${props.product.id}`}}>
                    <li><a href=""><FaSuitcaseRolling size={20} color='#545776'/></a></li>
                    </Link>
                </ul>
            </div>
        </div>
        <div class="descripcion-producto">
            <div class="sub-descripcion-producto">
                <h4>{props.product.city.name}</h4>
                <ul class="stars">
                    <li>{Math.floor(Math.random() * 10)}<FaRegStar size={20} /></li>
                </ul>
            </div>
            <span className="carrusel-category">{props.product.category.title}</span>
            <span>${Math.floor(Math.random() * 1000)} por noche</span>
        </div>
    </div>)
}

export default MiniatureProduct