import React, {useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AsyncSelect, { StylesConfig } from 'react-select/async'
import "../../Style/home.css"
import { ALL_CITIES } from "../../JSON/apiManagement.js";
import axios from 'axios';
import swal from "sweetalert"
//import Calendar from "./Calendar";

import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format'
import { addDays, subDays } from 'date-fns'
import { DateRange} from 'react-date-range';


const Searcher = (props) => {

  // Conexión API para ciudades:
  const [datesSelected,setDatesSelected] = useState({})
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity]=useState("");
  const getCitiesAxios = async () => {
    try {
        const resGetCity = await axios.get(ALL_CITIES)
        const cityList = resGetCity.data.map(ci => {
        const aux = {
          label: ci.name,
          value: ci.id.toString()
          }
          return(aux)})
          console.log(cityList)
        setCities(cityList)
    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
  getCitiesAxios()
}, []);


  const Ciudades = cities
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
  const onChangeSelectedOption = (e) => {
    const selectedCity = e.value;
    setSelectedCity(selectedCity);
};

  const hideOnClickOutside = (e) =>{
    if (refOne.current && !refOne.current.contains(e.target)){
      setOpen(false)
    }
  }

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

  // Lógica para buscar
  const navigate = useNavigate() 
  const searchCityAndDate = (e) => {
    e.preventDefault()
    const initialDate = format(range[0].startDate, "yyyy-MM-dd")
    const endDate = format(range[0].endDate, "yyyy-MM-dd")
    if ((selectedCity!=="")&(selectedCity!==null)){
    const forms = document.getElementById('post-product-form')
    
    navigate(`/search/${selectedCity}/${initialDate}/${endDate}`)}
    else{
      swal({
        title: "Complete los datos",
        icon: "error",
        button: "Cerrar"
    })}
  }

  return (
    <div className='form-container'>
      <form onSubmit={searchCityAndDate}>
        <AsyncSelect 
            className="select-custom-class2"
            onChange={onChangeSelectedOption}
            showArrow={false}
            placeholder="Dónde vamos?            "
            cacheOptions loadOptions={loadOptions} defaultOptions={cities}
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
   {/*<div className='container-calendar'>
      <Calendar onChange={onCalendarChange} />
          </div>*/}
    <div className='container-calendar'>
        <input value={ ` ${format(range[0].startDate, "dd/MM/yyyy")} to ${format(range[0].endDate, "dd/MM/yyyy")} ` } readOnly className='inputBox' onClick={() => setOpen(open => !open)}/> 
        <div className='git'> 
          <div ref={refOne}>
            
            {open &&
              <DateRange
                date={ new Date()}
                //onChange={handleDateSelect}
                onChange = {item => {setRange([item.selection])}}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={2}
                direction='horizontal'
                className='calendarElement'
              />}
          </div>
        </div> 
          </div>
    <div className='searcher-button'>
          <button type="submit">Buscar</button>
    </div>
    </form>
    </div>
  )
}

export default Searcher