import React from 'react'
import contimg from '../image/cont1.jpg'
import { Link } from 'react-router-dom'
import Info1 from '../Pages/ContactInfo/info1'
import Info2 from '../Pages/ContactInfo/info2'

const Contact = () => {
  return (
    <div>
    <div  style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
       <img src={contimg} alt="main"  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
       <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-0%, -15%)', color: '#FEFCFF',fontSize:"60px",fontFamily:"Monotype Corsiva",textAlign:'center', padding: '2px', borderRadius: '100px' ,animation:'@keyframes fadeIn'}}>
      <b>We've got the best food in town!...</b> <br/><br/>
    
      
       <div>
         <Link to="/BookingForm">
         <button style={{ cursor: 'pointer',background:"#A55D35",padding: '0.625rem 1.25rem', transition:'500',color:'#FBFBF9',marginRight: '0.5rem', marginBottom: '0.5rem',fontSize: '35px',fontWeight: '500',color: '#FCFFE0',borderRadius: '9999px',border: '1px solid #e5e7eb',outline: 'none',zIndex: 10,transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s', fontFamily:'Brush Script MT'}}>Booking</button>
         </Link> 
       </div>
         </p>
   </div>
   <br/><br/><br/><br/><br/>


   
   <div>
    <Info1/>
    <Info2/>
   </div>
 </div>
  )
}

export default Contact;