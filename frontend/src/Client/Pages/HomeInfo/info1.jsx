import React from 'react';
import res4 from '../../image/res4.jpg';
import { Link } from 'react-router-dom';

const Info1 = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div style={{ 
        position: 'absolute', 
        width: '100%', 
        height: '100%', 
        backgroundImage: `url(${res4})`, 
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
        borderRadius: '10px',
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
              <td style={{ width: '50%', textAlign: 'center' }}>
                <img src={res4} alt="homemain" style={{ 
                  width: '80%', 
                  height: 'auto', 
                  objectFit: 'cover', 
                  borderRadius: '10px' 
                }} />
              </td>
              <td style={{ 
                fontFamily: 'Lucida Calligraphy', 
                fontSize: '25px', 
                padding: '20px', 
                verticalAlign: 'middle', 
                textAlign: 'center' 
              }}>
               Enjoy Sri Lankan food in the village, as well as Western food
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ 
                textAlign: 'center', 
                padding: '20px' 
              }}>
                <Link to="/Menu">
                  <button style={{ 
                    cursor: 'pointer', 
                    background: "#C19A6B", 
                    padding: '0.625rem 1.25rem', 
                    color: '#FCFFE0', 
                    fontSize: '20px', 
                    fontWeight: '500', 
                    borderRadius: '9999px', 
                    border: '1px solid #e5e7eb', 
                    outline: 'none', 
                    fontFamily: 'Lucida Calligraphy', 
                    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s' 
                  }}>
                    Menu
                  </button>
                </Link>
              </td>
            </tr>
         
        </table>
      </div>
    </div>
  );
}

export default Info1;
