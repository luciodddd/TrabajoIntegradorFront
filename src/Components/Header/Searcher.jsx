import React, {useEffect, useRef, useState } from 'react'
import search from "../../Icons/search.png"
import ciudades from "../../JSON/ciudades.json"
import { DateRange} from 'react-date-range';
// import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format'
import { addDays } from 'date-fns'

const Searcher = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(),7),
      key: 'selection'
    }
  ])

  const [open, setOpen] = useState(false)
  const refOne = useRef(null)

  useEffect(() => {
    document.addEventListener("keydown",hideOnEscape,true)
    document.addEventListener("click",hideOnClickOutside,true)
  }, [])

  const hideOnEscape = (e) =>{
    console.log(e.key)
    if(e.key === "Escape"){
      setOpen(false)
    }
  }

  const hideOnClickOutside = (e) =>{
    if (refOne.current && !refOne.current.contains(e.target)){
      setOpen(false)
    }
  }
  //console.log(today)
  return (
    <div className='form-container'>
    {/*<div className="calendar-searcher">
        <Calendar className="calendar-searcher" showDoubleView={true} onChange={onChange} value={date}></Calendar>
    </div>*/}
    <form className='searcher-nav'>
        <select required name="city" id="city search-location" className='search-input'>
        <option className="placeholder-selected" value="" disabled selected hidden> A dónde vamos?</option>
          {ciudades.map(e=> {return(<option value={e}>{e}</option>)})}
        </select>
        {/*<input className='search-input' type="text" placeholder='Dónde quieres ir?' id="search-location"/>*/}
        <a className='vertical-line'></a>
        <input value={ ` ${format(range[0].startDate, "dd/MM/yyyy")} to ${format(range[0].endDate, "dd/MM/yyyy")} ` } readOnly className='inputBox' onClick={() => setOpen(open => !open)}/> 
        <div className='calendarWrap'> 
          <div ref={refOne}>
            {open &&
              <DateRange
                oneChange = {item => setRange([item.selection])} 
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={2}
                direction='horizontal'
                className='calendarElement'
              />
             }
          </div>
        </div> 
        <a className='vertical-line'></a>
        <input className='search-input' type="text" placeholder='Cuántas personas?' id="search-people"/>
        <div className='button-search'>
          <button type="submit">Buscar</button>
        </div>
    </form>
    </div>
  )
}

export default Searcher