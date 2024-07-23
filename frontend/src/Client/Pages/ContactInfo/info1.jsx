import React from 'react';
import cont from '../../image/cont3.jpg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Info1 = () => {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      overflow: 'hidden' 
    }}>
      <div style={{ 
        position: 'absolute', 
        top: 0,
        left: 0,
        width: '100%', 
        height: '100%', 
        backgroundImage: `url(${cont})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        zIndex: -1 
      }}></div>
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.85)', 
        padding: '40px', 
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        maxWidth: '800px',
        textAlign: 'center',
        overflowY: 'auto',
        maxHeight: '90%'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          textAlign: 'left'
        }}>
          <thead>
            <tr>
              <th colSpan="2" style={{ 
                fontFamily: "Lucida Calligraphy", 
                fontSize: '32px', 
                color: '#333', 
                textAlign: 'center', 
                paddingBottom: '20px' 
              }}>
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" style={{ 
                fontFamily: 'Mongolian Baiti', 
                fontSize: '22px', 
                padding: '20px', 
                lineHeight: '1.6',
                color: '#555'
              }}>
                <i>
                We would love to hear from you! Whether you have a question about our menu, reservations, or anything else, our team is ready to answer all your questions.
                </i>
              </td>
            </tr>
            <tr>
              <td style={{ 
                fontFamily: 'Mongolian Baiti', 
                fontSize: '20px', 
                padding: '15px', 
                color: '#333',
                borderBottom: '1px solid #ddd'
              }}>
                Address
              </td>
              <td style={{ 
                fontFamily: 'Mongolian Baiti', 
                fontSize: '20px', 
                padding: '15px', 
                color: '#555',
                borderBottom: '1px solid #ddd'
              }}>
                No:66, Wijayakatupotha, Chilaw, Sri Lanka
              </td>
            </tr>
            <tr>
              <td style={{ 
                fontFamily: 'Mongolian Baiti', 
                fontSize: '20px', 
                padding: '15px', 
                color: '#333',
                borderBottom: '1px solid #ddd'
              }}>
                Phone Number
              </td>
              <td style={{ 
                fontFamily: 'Mongolian Baiti', 
                fontSize: '20px', 
                padding: '15px', 
                color: '#555',
                borderBottom: '1px solid #ddd'
              }}>
                +94 77 7075 145 / +94 76 3780 913
              </td>
            </tr>
            <tr>
              <td style={{ 
                fontFamily: 'Mongolian Baiti', 
                fontSize: '20px', 
                padding: '15px', 
                color: '#333',
                borderBottom: '1px solid #ddd'
              }}>
                E-mail
              </td>
              <td style={{ 
                fontFamily: 'Mongolian Baiti', 
                fontSize: '20px', 
                padding: '15px', 
                color: '#555',
                borderBottom: '1px solid #ddd'
              }}>
                thammannava@gmail.com
              </td>
            </tr>
            <tr>
              <td style={{ 
                fontFamily: 'Mongolian Baiti', 
                fontSize: '20px', 
                padding: '15px', 
                color: '#333',
                borderBottom: '1px solid #ddd'
              }}>
                Social Media
              </td>
              <td style={{ 
                fontFamily: 'Mongolian Baiti', 
                fontSize: '20px', 
                padding: '15px', 
                color: '#555',
                borderBottom: '1px solid #ddd'
              }}>
                FaceBook : Thammanna Lake  (Resort and Spa)<br/>
                WhatsApp : +94 77 3516 328
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Info1;
