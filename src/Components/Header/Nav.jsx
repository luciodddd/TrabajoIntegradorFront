import React from 'react'
import { Link } from "react-router-dom";
import NavItem from './NavItem';
import Categories from "../../JSON/categories.json"

const Nav = (props) => {
const categories = Categories
const categKeys = Object.keys(categories)
const navItems = categKeys.map(e => {
    return(<NavItem icon={categories[e].imageUrl} category={categories[e].tittle} key={e+"_category"}></NavItem>)
})
    return (
        <nav className="navbar">
            {navItems}
        </nav>
    )
}

export default Nav
