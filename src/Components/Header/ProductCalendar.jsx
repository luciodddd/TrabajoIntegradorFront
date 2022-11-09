import React, {useEffect, useRef, useState } from 'react'
import { addDays, format} from 'date-fns';
import {today} from '@internationalized/date';
import {getLocalTimeZone} from '@internationalized/date'
import { DateRange} from 'react-date-range';
// import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file



const ProductCalendar = () => {
  const [open, setOpen] = useState(true)
  const refOne = useRef(null)

  useEffect(() => {
    document.addEventListener("keydown",hideOnEscape,true)
  }, [])

  const hideOnEscape = (e) =>{
    console.log(e.key)
    if(e.key === "Escape"){
      setOpen(false)
    }
  }
  
//   Poner los dias no disponibles
  const disabledDays = [
    {
      year: 2022,
      month: 11,
      day: 10,
    },
    {
      year: 2022,
      month: 11,
      day: 20,
    },
    {
      year: 2022,
      month: 11,
      day: 14,
    }
  ];

  const handleDisabledSelect = disabledDay => {
    console.log('Tried including a disabled day', disabledDay);
  };

  return (
    <div className='ProductCalendar'>
        <div className='git'> 
          <div ref={refOne}>
            {open &&
              <DateRange
                editableDateInputs={false}
                moveRangeOnFirstSelection={true}
                // customClass: 'my-css',
                months={2}
                disablePast={false}
                disabledDays={disabledDays} // here we pass them
                onDisabledDayError={handleDisabledSelect} // handle error
                shouldHighlightWeekends
                direction='horizontal'
                className='calendarElement'
                minValue={today(getLocalTimeZone())}
                label="Trip dates"
              />
             }
          </div>
        </div> 
    </div>
  )
}

export default ProductCalendar