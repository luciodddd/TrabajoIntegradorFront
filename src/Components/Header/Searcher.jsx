import React from 'react'
import search from "../../Icons/search.png"

const Searcher = () => {
  return (
    <div className='form-container'>
    <form className='searcher-nav'>
        <input className='search-input' type="text" placeholder='Dónde quieres ir?' id="search-location"/>
        <a className='vertical-line'></a>
        <input className='search-input' type="date" id="search-date"/>
        <span className='vertical-line'></span>
        <input className='search-input' type="text" placeholder='Cuántas personas?' id="search-people"/>
        <button type="submit"><img src={search} className="search-img search-input"/></button>
    </form>
    </div>
  )
}

export default Searcher