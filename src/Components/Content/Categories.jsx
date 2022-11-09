import React from 'react'
import { useEffect, useState } from 'react'

const Categories = (props) => {
    const activeCategoryFilter = props.filter
    const [isActive, setIsActive] = useState(props.active);
    console.log(isActive)

    return (
    <div className='individual-category' onClick={() => activeCategoryFilter(props.title)}
    style={{
      backgroundColor: (isActive===props.title) ? 'black' : '',
      color: (isActive===props.title) ? 'white' : '',
    }}
    >
        <img src = {props.imageUrl}></img>
        <h2>{props.title}</h2>
        <span>x hoteles</span>
    </div>
  )
}

export default Categories