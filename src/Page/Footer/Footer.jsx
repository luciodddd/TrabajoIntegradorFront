import React from 'react'

const Footer = () => {
    const today = new Date()
    return (
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="first-item">
                        <div class="logo">
                            Digital
                        </div>
                        <ul>
                            <li><a href="#">Buenos Aires Argentina</a></li>
                            <li><a href="#">digital@company.com</a></li>
                            <li><a href="#">+ 54 011 23659421</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <h4>Shopping &amp; Categories</h4>
                    <ul>
                        <li><a href="#">Men’s Shopping</a></li>
                        <li><a href="#">Women’s Shopping</a></li>
                        <li><a href="#">Kid's Shopping</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h4>Sobre nosotros</h4>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Conócenos</a></li>
                        <li><a href="#">Ayuda</a></li>
                        <li><a href="#">Contáctanos</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h4>Ayuda e Informacion</h4>
                    <ul>
                        <li><a href="#">Ayuda</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Sigue tu reserva</a></li>
                    </ul>
                </div>
                <div class="col-lg-12">
                    <div class="under-footer">
                        <p>Copyright &copy; {today.getFullYear()} Digital. All Rights Reserved. </p>
                        <ul>
                            <li><a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.twitter.com"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)
}

export default Footer