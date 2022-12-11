import React from 'react'
import {Link} from "react-router-dom";


const Button = (props) => {
  
  return (
    <Link className={props.className} to={{ pathname: `/${props.link}`}}>
    <span href="">{props.text}</span>
    </Link>
  )
}

export default Button