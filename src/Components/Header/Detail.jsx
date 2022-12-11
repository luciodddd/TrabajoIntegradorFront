import React from 'react'
import { FaWifi , FaSwimmer,FaCoffee,FaUtensils,FaSnowflake,FaSmokingBan,FaCocktail,FaPaw,FaCar,FaConciergeBell,FaDumbbell,FaSpa,FaTv} from 'react-icons/fa';

const Detail = ({detail}) => {
  function parseIcons(icon) {
    switch (icon) {
        case 'wi-fi':
            return <FaWifi className="service-icon" />
        case 'Pileta':
            return <FaSwimmer className="service-icon swimmer-icon" />
        case 'Desayuno':
            return <FaCoffee className="service-icon" />
        case 'Cocina':
            return <FaUtensils className="service-icon" />
        case 'Aire acondicionado':
            return <FaSnowflake className="service-icon" />
        case 'Prohibido fumar':
            return <FaSmokingBan className="service-icon" />
        case 'Bar':
            return <FaCocktail className="service-icon" />
        case 'Apto mascotas':
            return <FaPaw className="service-icon" />
        case 'Estacionamiento gratuito':
            return <FaCar className="service-icon" />
        case 'Servicio a cuarto':
            return <FaConciergeBell className="service-icon" />
        case 'Gimnacio':
            return <FaDumbbell className="service-icon" />
        case 'Spa':
            return <FaSpa className="service-icon" />
        case 'Televisor':
            return <FaTv className="service-icon" />
        default:
            return
    }
};
  return (
            <span className='individual-detail'>{parseIcons(detail.name)} {detail.name}</span>
  )
}

export default Detail
