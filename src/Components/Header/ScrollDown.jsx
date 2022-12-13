import AsyncSelect, { StylesConfig } from 'react-select/async'
import React, {useEffect, useRef, useState } from 'react'

const ScrollDown = ({cities}) => {
  console.log(cities)
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
    { label: 'Barcelona', value: '5' },
    { label: 'Quebec', value: '6' },
    { label: 'Roma', value: '7' },
    { label: 'Sao Pablo', value: '8' },
    { label: 'Playa del carmen', value: '9' },
  ];

  const filterCiudades = (inputValue: string) => {
    return cities.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  
  const loadOptions = (
    inputValue: string,
    callback: (options: cities[]) => void
  ) => {
    setTimeout(() => {
      callback(filterCiudades(inputValue));
    }, 1000);
  };
  
  return (
    <div>
        <AsyncSelect 
                    className="select-custom-class"
                    showArrow={false}
                    placeholder="Dónde vamos?"
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
        </div>
    )
}

export default ScrollDown