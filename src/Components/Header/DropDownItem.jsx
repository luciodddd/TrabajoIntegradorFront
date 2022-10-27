import React from "react"
function DropDownItem(props){
    return(
      <a href={props.link && props.link} className='menu-item' onClick={props.handler} id={props.id}>
        <img className='user-avatar' src={props.profilePic}></img>
        <i class={props.icon}></i>
        {props.children}
      </a>
    )}

export default DropDownItem;