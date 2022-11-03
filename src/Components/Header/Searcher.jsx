import React, { useEffect, useRef, useState } from 'react'
import search from "../../Icons/search.png"
import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange} from 'react-date-range';
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

  return (
    <div className='form-container'>
    <form className='searcher-nav'>
        <input className='search-input' type="text" placeholder='Dónde quieres ir?' id="search-location"/>
        <a className='vertical-line'></a>
        <div className='calendarWrap'>
          <input value={ ` ${format(range[0].startDate, "dd/MM/yyyy")} to ${format(range[0].endDate, "dd/MM/yyyy")} ` } readOnly className='inputBox' onClick={() => setOpen(open => !open)}/> 
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
        <span className='vertical-line'></span>
        <input className='search-input' type="text" placeholder='Cuántas personas?' id="search-people"/>
        <button type="submit"><img src={search} className="search-img search-input"/></button>
    </form>
    </div>
  )
}

export default Searcher