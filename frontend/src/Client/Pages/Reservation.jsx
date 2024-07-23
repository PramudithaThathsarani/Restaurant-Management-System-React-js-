import React from 'react'
import Res from '../image/res.jpg'
import { Link } from 'react-router-dom';
import Infor1 from './ReseInfo/infor1'

const Reservation = () => {
  return (
    <div>
      <div className="main-img"  style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
          <img src={Res} alt="homemain" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}/>
          <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-10%, -70%)', color: '#3F2305',fontSize:"60px",fontFamily:"Lucida Calligraphy",textAlign:'center', padding: '2px', borderRadius: '100px' ,animation:'@keyframes fadeIn'}}>
         <b>Keep calm and eat restaurant foods....</b> <br/><br/>
            
         
          <div>
            <Link to="/BookingForm">
            <button style={{ cursor: 'pointer',background:'#FBFBF9',padding: '0.625rem 1.25rem', transition:'300',color:"#6C3428",marginRight: '0.5rem', marginBottom: '0.5rem',fontSize: '35px',fontWeight: '500',color: '#6C3428',borderRadius: '9999px',border: '1px solid #e5e7eb',outline: 'none',zIndex: 10,transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s', fontFamily:'Brush Script MT'}}>Booking</button>
            </Link> 
          </div>
            </p>
          </div>

          <br/><br/><br/><br/><br/>

<div>
  <Infor1/>
  
</div>
    </div>
  )
}

export default Reservation