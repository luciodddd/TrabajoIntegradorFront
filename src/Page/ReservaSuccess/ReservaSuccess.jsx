
import "../../Style/bootstrap.min.css"
import "../../Style/styles.css"
import "../../Style/login-register.css"
import "../../Style/ReservaSuccess.css"
import React from 'react'
import { Link} from "react-router-dom";



const ReservaSuccess = () => {
    
    return (
            <div className="reserva">
                <div className='msj-reserva'>
                    <h6>Muchas Gracias</h6>
                    <h3>Su reserva se ha realizado con exito</h3>
                    <Link class="home" to={{ pathname: "/"}}>
                        <button type="submit">Volver a la pagina principal</button>
                    </Link>
                </div>
            </div>
    )
}
export default ReservaSuccess;