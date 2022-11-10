import React from 'react'
import { useEffect, useState } from 'react'

const Categories = (props) => {
    const activeCategoryFilter = props.filter
    const [isActive, setIsActive] = useState(props.active);
    

    return (
    <div className='individual-category' onClick={() => activeCategoryFilter(props.category.title)}
    style={{
      backgroundColor: (isActive===props.category.title) ? 'black' : '',
      color: (isActive===props.category.title) ? 'white' : '',
    }}
    >
        <img src = {props.category.image.url}></img>
        <h2>{props.category.title}</h2>
        <span>x hoteles</span>
    </div>
  )
}

export default Categories