import React from 'react'


const MiniatureProduct = (props) => {
    const product = props.product
  return (
    <div class="item">
        <div class="thumb">
            <div class="hover-content">
                <ul>
                    <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                    <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                    <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
            <img src={product.imageUrl} alt={product.location} />
        </div>
        <div class="down-content">
            <h4>{product.location}</h4>
            <span>${product.price} por noche</span>
            <span className="carrusel-category">{product.category}</span>
            <ul class="stars">
                <li><i class="fa fa-star"></i>{product.score}</li>
            </ul>
        </div>
    </div>
  )
}

export default MiniatureProduct