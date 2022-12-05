import "../../Style/bootstrap.min.css"
import "../../Style/styles.css"
import "../../Style/login-register.css"
import "../../Style/ReservaSuccess.css"
import React from 'react'
import { Link} from "react-router-dom";
// import { AiFillCheckCircle } from "react-icons/ai";



const ProductSuccess = () => {
    
    return (
            <div className="reserva">
                <div className='msj-reserva'>
                    {/* <AiFillCheckCircle className='style-icon'/> */}
                    <hr />
                    <h6>Muchas Gracias</h6>
                    <h3>El producto se ha creado exitosamente</h3>
                    <Link class="home" to={{ pathname: "/"}}>
                        <button type="submit">Volver a la pagina principal</button>
                    </Link>
                </div>
            </div>
    )
}
export default ProductSuccess;
