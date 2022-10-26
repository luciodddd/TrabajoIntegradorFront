import React from 'react'
import CarruselProducts from '../../Components/Content/CarruselProducts';
import upcomingMonths from "../../JSON/upcomingMonths.json"
import products from "../../JSON/products.json"

function Home() {
    // Logica js
    return (
    <div className="home-main">
        <section class="section" id="carrusel">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="section-heading">
                              <h2>Se acerca el verano</h2>
                              <span>Los mejores alojamientos para los próximos meses</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="row">
                    <CarruselProducts data={upcomingMonths}></CarruselProducts>
                  </div>
              </div>
        </section>

        <section class="section" id="carrusel">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="section-heading">
                              <h2>Ubicaciones destacadas</h2>
                              <span>¿Aún no sabes a dónde ir?</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="row">
                    <CarruselProducts data={products}></CarruselProducts>
                  </div>
              </div>
        </section>

      
          <div class="subscribe">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-8">
                          <div class="section-heading">
                              <h2>Suscribiéndote a nuestros reportes podés tenes hasta 30% Off!</h2>
                              <span>Nunca fue tan fácil viajar.</span>
                          </div>
                          <form id="subscribe" action="" method="get">
                              <div class="row">
                              <div class="col-lg-5">
                                  <fieldset>
                                  <input name="name" type="text" id="name" placeholder="Tu Nombre" required="" />
                                  </fieldset>
                              </div>
                              <div class="col-lg-5">
                                  <fieldset>
                                  <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Tu dirección de correo" required="" />
                                  </fieldset>
                              </div>
                              <div class="col-lg-2">
                                  <fieldset>
                                  <button type="submit" id="form-submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                                  </fieldset>
                              </div>
                              </div>
                          </form>
                      </div>
                      <div class="col-lg-4">
                          <div class="row">
                              <div class="col-6">
                                  <ul>
                                      <li>Nuestra ubicación:<br /><span>Argentina</span></li>
                                      <li>Teléfono:<br /><span>+54 9 351 9808372</span></li>
                                      <li>Oficina principal:<br /><span>Buenos Aires</span></li>
                                  </ul>
                              </div>
                              <div class="col-6">
                                  <ul>
                                      <li>Horario de atención:<br /><span>07:30 AM - 9:30 PM</span></li>
                                      <li>Email:<br /><span>info@company.com</span></li>
                                      <li>Redes Sociales:<br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}



export default Home;