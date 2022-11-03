import React from 'react'

const Button = (props) => {
  return (
    <a className={props.className} href={props.link}>{props.text}</a>
  )
}

export default Button