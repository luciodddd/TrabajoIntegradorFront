import React, {useState} from 'react'
import search from "../../Icons/search.png"
import ciudades from "../../JSON/ciudades.json"
import Calendar from 'react-calendar';

const Searcher = () => {
const [date,setDate] = useState(Date.now())
const today = (new Date().getFullYear())+'-'+((new Date()).getMonth()+1)+'-'+((new Date()).getDay());

const onChange = date => {
  setDate(date)
}
  //console.log(today)
  return (
    <div className='form-container'>
    {/*<div className="calendar-searcher">
        <Calendar className="calendar-searcher" showDoubleView={true} onChange={onChange} value={date}></Calendar>
    </div>*/}
    <form className='searcher-nav'>
        <select required name="city" id="city search-location" className='search-input'>
        <option className="placeholder-selected" value="" disabled selected hidden>Dónde querés ir?</option>
          {ciudades.map(e=> {return(<option value={e}>{e}</option>)})}
        </select>
        {/*<input className='search-input' type="text" placeholder='Dónde quieres ir?' id="search-location"/>*/}
        <a className='vertical-line'></a>
        <input className='search-input' type="date" id="search-date" min={today}/>
        <a className='vertical-line'></a>
        <input className='search-input' type="date" id="search-date"/>
        <a className='vertical-line'></a>
        <input className='search-input' type="text" placeholder='Cuántas personas?' id="search-people"/>
        <button type="submit"><img src={search} className="search-img search-input"/></button>
    </form>
    </div>
  )
}

export default Searcher