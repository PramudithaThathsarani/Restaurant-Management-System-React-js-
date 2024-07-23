import React from 'react'
import home from '../image/home.jpg'
import { Link } from 'react-router-dom';
import Info1 from './HomeInfo/info1';
import Info2 from './HomeInfo/info2';
import Info3 from './HomeInfo/info3'



const Home = () => {
  return (
       <div>
          

          <div className="main-img"  style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
          <img src={home} alt="homemain" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}/>
          <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-90%, -50%)', color: '#FEFCFF',fontSize:"60px",fontFamily:"Curlz MT",textAlign:'center', padding: '2px', borderRadius: '100px' ,animation:'@keyframes fadeIn'}}>
         <b>GOOD FOOD IS FUNDATION OF GENUYNE HAPPINESS...</b> <br/><br/>

         
          <div>
            <Link to="/BookingForm">
            <button style={{ cursor: 'pointer',background:'#FBFBF9',padding: '0.625rem 1.25rem', transition:'300',color:"#C19A6B",marginRight: '0.5rem', marginBottom: '0.5rem',fontSize: '35px',fontWeight: '500',color: '#254117',borderRadius: '9999px',border: '1px solid #e5e7eb',outline: 'none',zIndex: 10,transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s', fontFamily:'Brush Script MT'}}>Booking</button>
            </Link> 
          </div>
            </p>
          </div><br/><br/><br/><br/><br/>

          <div >
       <Info1/><br/><br/><br/><br/><br/>
       <Info2/><br/><br/><br/><br/><br/>
       <Info3/><br/><br/><br/><br/><br/>
       
       
      </div>
      

      
      
    </div>
    
  
   
    
  )
}

export default Home