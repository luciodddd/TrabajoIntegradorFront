import React from 'react'
import MiniatureProduct from './MiniatureProduct'

const CarruselProducts = (props) => {
  const products = props.data
    console.log(products)
  
  const carruselItems = products.map(e => {
        console.log(e)
      return(<MiniatureProduct product={e} key={e.title}/>)
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