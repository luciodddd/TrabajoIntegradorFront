import React, { useState} from 'react'
import MiniatureProduct from './MiniatureProduct'


const CarruselProducts = (props) => {

  const carruselItems = props.data.map(e => {
  return(<MiniatureProduct product={e} key={e.id}/>)
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