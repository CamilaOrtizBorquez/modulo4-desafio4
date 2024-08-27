import React from 'react'
import ICON_PIZZA from '../assets/img/icon-pizza.png'
import ICON_PADLOCK_OPEN from '../assets/img/icon_candado-open.png'
import ICON_PADLOCK_CLOSE from '../assets/img/icon_candado-close.png'
import ICON_CARRO from '../assets/img/carrito.png'
import { formatearValor } from '../utils/formatearMiles'

export const Navbar = ({total}) => {

  const token = false; 

  return (
    <div>
      <nav className="header-navbar navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Pizzeria Mamma Mia!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item py-1 px-1 m-auto">
                <img className="icon_pizza" src={ ICON_PIZZA } alt="icono de pizza"/>
                <a className="nav-link text-white py-0" href="#">Home</a>
              </li>
              {!token ? 
                  (
                    <>
                     <li className="nav-item py-1 m-auto">
                      <img className="icon_padlock" src={ ICON_PADLOCK_CLOSE } alt="icono de candado"/>
                      <a className="nav-link text-white py-0 ps-0" href="#">Login</a>
                    </li>
                    <li className="nav-item py-1 m-auto">
                      <img className="icon_padlock" src={ ICON_PADLOCK_CLOSE } alt="icono de candado"/>
                      <a className="nav-link text-white py-0 ps-0" href="#">Register</a>
                    </li>
                    </>
                  ):
                  (
                      <>
                        <li className="nav-item py-1 m-auto">
                          <img className="icon_padlock" src={ ICON_PADLOCK_OPEN } alt="icono de candado"/>
                          <a className="nav-link text-white py-0 ps-0" href="#">Profile</a>
                        </li>
                        <li className="nav-item py-1 m-auto">
                          <img className="icon_padlock" src={ ICON_PADLOCK_CLOSE } alt="icono de candado"/>
                          <a className="nav-link text-white py-0 ps-0" href="#">Logout</a>
                        </li>
                      </>
                  )
              }
            </ul>              
              <button className="btn btn-outline-success px-1 text-white" type="submit">
                <img className="icon_carro p-0" src={ ICON_CARRO } alt="icono de carrito"/>
                Total= $ {formatearValor(total)}
              </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
