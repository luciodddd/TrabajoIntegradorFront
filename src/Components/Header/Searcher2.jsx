import React, {useEffect, useRef, useState } from 'react'
import { DateRange} from 'react-date-range';
// import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import "../../Style/home.css"

import axios from 'axios';
import { ALL_CITIES, } from "../../JSON/apiManagement.js";


const Searcher = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(),7),
      key: 'selection'
    }
  ])

  const [cities, setCities] = useState([]);
    
    const getCitiesAxios = async () => {
        try {
            const resGetCity = await axios.get(ALL_CITIES)
            setCities(resGetCity.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCitiesAxios()
        console.log(cities)
    }, []);
  
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
  const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    function showHide4() {
        var listado = document.getElementById("container-ciudades-listado-2");
        var input = document.getElementById("inputDestino");

        input.addEventListener('focus', function() {
            listado.style.display = 'block';
            
        });
        input.addEventListener('focusout', function() {
            listado.style.display = 'none';
        });
    }

    useEffect(() => {
        const results = cities.filter(cit =>
            cit.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
        console.log(results)
    }, [searchTerm]);
  //console.log(today)
  return (
    <div className='form-container'>
    {/*<div className="calendar-searcher">
        <Calendar className="calendar-searcher" showDoubleView={true} onChange={onChange} value={date}></Calendar>
    </div>*/}
    <div className='city-search'>
    {/* <form className='searcher-nav'> */}
    <div className="container-ciudades" ref={refOne}>
                        <input id="inputDestino" className="imput-ciudad" type="search" value={searchTerm} onChange={handleChange} onClick={showHide4} placeholder="¿A dónde vamos?"></input>
                        <div className="container-ciudades-listado">
                            <ul className="container-ciudades-listado-2" id="container-ciudades-listado-2">
                                {searchResults.map((value) => (
                                    <a href='/' className='city-searcher'>
                                        <span className="city">
                                          <li className="city-li">{value.name}</li>
                                        </span>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
        {/*<input className='search-input' type="text" placeholder='Dónde quieres ir?' id="search-location"/>*/}
    </div>
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
    {/* </form> */}
    <div className='searcher-button'>
          <button clasName='button-style' type="submit">Buscar</button>
          
    </div>
    </div>
  )
}

export default Searcher