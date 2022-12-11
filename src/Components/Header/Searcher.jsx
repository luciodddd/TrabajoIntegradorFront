import React, {useEffect, useRef, useState } from 'react'
import search from "../../Icons/search.png"
import ciudades from "../../JSON/ciudades.json"
import { DateRange} from 'react-date-range';
// import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import AsyncSelect, { StylesConfig } from 'react-select/async'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import "../../Style/home.css"

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

  // Estilos y datos del Select



  const Ciudades = [
    { label: 'Cordoba', value: '1' },
    { label: 'Buenos Aires', value: '2' },
    { label: 'Rosario', value: '3' },
    { label: 'Mendonza', value: '4' },
  ];

  const filterCiudades = (inputValue: string) => {
    return Ciudades.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  
  const loadOptions = (
    inputValue: string,
    callback: (options: Ciudades[]) => void
  ) => {
    setTimeout(() => {
      callback(filterCiudades(inputValue));
    }, 1000);
  };


  //console.log(today)
  return (
    <div className='form-container'>
    {/*<div className="calendar-searcher">
        <Calendar className="calendar-searcher" showDoubleView={true} onChange={onChange} value={date}></Calendar>
    </div>*/}
    {/* <div className='city-search'> */}
        <AsyncSelect 
            className="select-custom-class"
            showArrow={false}
            placeholder="Elija un destino"
            cacheOptions loadOptions={loadOptions} defaultOptions
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              height: '50px',
              width: '422px',
              colors: {
                ...theme.colors,
                primary25: 'aquamarine',
                primary: 'black',
              },
            })}  
        />
    {/* </div> */}
        {/* <a className='vertical-line'></a> */}
    <div className='container-calendar'>
        <input value={ ` ${format(range[0].startDate, "dd/MM/yyyy")} to ${format(range[0].endDate, "dd/MM/yyyy")} ` } readOnly className='inputBox' onClick={() => setOpen(open => !open)}/> 
        <div className='git'> 
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
      </div>
    <div className='searcher-button'>
          <button type="submit">Buscar</button>
    </div>
    </div>
  )
}

export default Searcher