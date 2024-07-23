import React from 'react'
import logo from '../../Client/image/logo.jpg'
import '../../Component/Client/navigate.css'
import bot from '../../Client/image/logo.gif'

const NavigateBar = () => {
  return (
   
        <nav className="app__navbar">
      <div className="app__navbar-logo">
         <img src={logo} alt="app__logo" />
      </div>
    
          <ul className="app__navbar-links  ">
            <li><a href="/" style={{"textDecoration": 'none',"color":'black'}}>Home</a></li>
           <li> <a href="/menu" style={{"textDecoration": 'none',"color":'black'}}>Menu</a></li>
           <li> <a href="/reservation" style={{"textDecoration": 'none',"color":'black'}}>Reservation</a></li>
           <li> <a href="/contact" style={{"textDecoration": 'none',"color":'black'}}>Contact</a></li>
           
          </ul>

          <div className="app__navbar-login">
          <a href="/BookingForm" style={{"textDecoration": 'none',"color":'black'}}>Book Table</a>
          <div />
            
            <a href="/bot" style={{"textDecoration": 'none',"color":'black'}}> <img src={bot} alt="bot__logo" /></a>
         
      </div>

      
        </nav>
     

  )
}

export default NavigateBar;