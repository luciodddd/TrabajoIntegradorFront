import React, { useState} from 'react'
import MiniatureProduct from './MiniatureProduct'
import { Carousel } from 'react-responsive-carousel';


const CarruselProducts = (props) => {

    const carruselItems = props.data.map(e => {
    return(<MiniatureProduct product={e} key={e.id}/>)})
    
    return (
        <Carousel infiniteLoop={true} showArrows={true} swipeable={true} useKeyboardArrows={true} autoPlay={true} emulateTouch={true}>
            {carruselItems}
        </Carousel>
        )
}

export default CarruselProducts

/*<div class="col-lg-12">
    <div class="men-item-carousel">
        <div class="owl-men-item owl-carousel">
            {carruselItems}
        </div>
    </div>
</div>*/