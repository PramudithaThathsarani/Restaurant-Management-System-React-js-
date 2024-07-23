import React from 'react'
import Menuimg from '../image/menu.jpg'
import { Link } from 'react-router-dom';
import Info1 from './MenuInfo/info1';
import Info2 from './MenuInfo/info2';
import Info3 from './MenuInfo/info3';
import Info4 from './MenuInfo/info4';
import Info5 from './MenuInfo/info5';

const Menu = () => {
  return (
    <div>
       <div className="main-img" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
          <img src={Menuimg} alt="main"  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
          <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black',fontSize:"60px",fontFamily:"Curlz MT",textAlign:'center', padding: '2px', borderRadius: '100px' ,animation:'@keyframes fadeIn'}}>
         <b>BEYOND THE BOUNDARIES OF TASTE...</b> <br/><br/>
       
         
          <div>
            <Link to="/BookingForm">
            <button style={{ cursor: 'pointer',background:"#C19A6B",padding: '0.625rem 1.25rem', transition:'500',color:'#FBFBF9',marginRight: '0.5rem', marginBottom: '0.5rem',fontSize: '35px',fontWeight: '500',color: 'FCFFE0',borderRadius: '9999px',border: '1px solid #e5e7eb',outline: 'none',zIndex: 10,transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s', fontFamily:'Brush Script MT'}}>Booking</button>
            </Link> 
          </div>
            </p>
      </div>

      
        <br/><br/><br/><br/><br/>

        <div>
          <Info1/>
          <Info2/>
          <Info3/>
          <Info4/>
          <Info5/>
        </div>
    </div>
  )
}

export default Menu;