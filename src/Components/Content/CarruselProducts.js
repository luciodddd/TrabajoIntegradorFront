import React from 'react'
import MiniatureProduct from './MiniatureProduct'

const CarruselProducts = (props) => {
  const products = props.data

  const productKeys = Object.keys(products)
  const carruselItems = productKeys.map(e => {
      return(<MiniatureProduct product={products[e]} key={e+"_product_upcoming"}/>)
  })

    return (
        <div class="col-lg-12">
            <div class="men-item-carousel">
                <div class="owl-men-item owl-carousel">
                    {carruselItems}
                </div>
            </div>
        </div>
  )
}

export default CarruselProducts