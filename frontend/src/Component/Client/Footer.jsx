import React from 'react'

const Footer = () => {
  return (
    <div style={{background:'black', color:'white',  fontSize:'medium',}}>
      <footer style={{
         marginTop: '40px',
         borderTop: '5px solid #6f6f6f',
         backgroundColor: 'rgb(0, 0, 0)',
         color: '#fff',
         padding: '30px 100px'
      }}>

        <h1 style={{
             fontFamily: "'Playfair Display', serif",
             borderBottom: '1px solid white',
             width: '20%',
             paddingBottom: '5px',
             textAlign:'center'
        }}>තම්මැන්නා Restaurant</h1>

        <div style={{
             marginTop: '-10px',
             display: 'flex',
             flexWrap: 'wrap',
             textAlign:'left'
        }}>
          <div style={{
             marginRight: '50px'
          }} className="service">
            <p style={{
                 maxWidth: '300px',
                 fontSize:"20px",
            }}><ul>
                <li><a href='/home' style={{color:'white'}}>Home</a></li>
                <li><a href='/menu' style={{color:'white'}}>Menu</a></li>
                <li><a href='/reservation' style={{color:'white'}}>Reservation</a></li>
                <li><a href='/Contact' style={{color:'white'}}>Contact</a></li>
               
              </ul></p>
          </div>
        </div>

        <div id="contact" style={{
             color: 'rgb(181, 181, 181)',
             textAlign:'center'
        }}>
           Contact Information<br/>
          Address:No:66, Wijayakatupotha, Chilaw, Sri Lanka<br/>
          Phone Number:+94 77 7075 145 / +94 76 3780 913<br/>
          E-mail: thammannava@gmail.com<br/>
        </div>
      </footer>
    </div>
  )
}

export default Footer
