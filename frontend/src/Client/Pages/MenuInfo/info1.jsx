import React from 'react';
import menu from '../../image/menu3.jpg';


const Info1 = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div style={{ 
        position: 'absolute', 
        top: 0,
        left: 70,
        width: '90%', 
        height: '90%', 
        backgroundImage: `url(${menu})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        zIndex: -1 
      }}>
      </div>
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        background: 'rgba(255, 255, 255, 0.8)', 
        padding: '20px', 
        borderRadius: '50px',
        width: '60%'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
       
            <tr>
              <th colSpan="2" style={{ 
                fontFamily: "Lucida Calligraphy", 
                fontSize: '30px', 
                color: '#52595D', 
                textAlign: 'center', 
                paddingBottom: '20px' 
              }}>
                Menu
              </th>
            </tr>
          
         
            <tr>
              
              <td style={{ 
                fontFamily: 'Mongolian Baiti', 
                fontSize: '25px', 
                padding: '20px', 
                verticalAlign: 'middle', 
                textAlign: 'center' 
              }}>
               <i>Our kitchen is rooted in exceptional homegrown ingredients, thoughtful-yet-simple preparations, and a passion for breathing new life into old-world recipes. Listed here is the food menu.
               </i>
              </td>
            </tr>
            
         
        </table>
      </div>
    </div>
  );
}

export default Info1;
