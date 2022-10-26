import React from 'react'

const NavItem = (props) => {
  return (
      <div className='nav-item'>
        <a href={props.link && props.link} className='icon-button'>
            <img src={props.icon} className="categories-bar"></img>
            <span>{props.category}</span>
        </a>
      </div>
  )
}

export default NavItem
