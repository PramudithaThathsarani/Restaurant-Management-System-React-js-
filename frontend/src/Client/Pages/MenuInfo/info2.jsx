import React from 'react';
import fruit from '../../image/fresh fruit juice.jpg';
import lime from '../../image/lime.jpg';
import pineapple from '../../image/pineapple.jpg'
import watermelon from '../../image/watermelon.jpg'
import mango from '../../image/mango.jpg'

const beverages = [
  {
    image: fruit,
    name: 'Orange Juice',
    price: 'Rs.430/=',
  },
  {
    image: lime,
    name: 'Lime Juices',
    price: 'Rs.570/=',
  },
  {
    image: pineapple,
    name: 'Pineapple Juice',
    price: 'Rs.420/=',
  },
  {
    image: watermelon,
    name: 'Watermelon Juice',
    price: 'Rs.430/=',
  },
  {
    image: mango,
    name: 'Mango Juice',
    price: 'Rs.430/=',
  },
 

  // Add more beverage objects here
];

const Info2 = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '10px',
        width: '60%',
        maxHeight: '80vh', // Set max height for the container
        overflowY: 'auto' // Enable vertical scroll if content overflows
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th colSpan={3} style={{
                fontFamily: "Lucida Calligraphy",
                fontSize: '30px',
                color: '#52595D',
                textAlign: 'center',
                paddingBottom: '20px'
              }}>Beverage</th>
            </tr>
          </thead>
          <tbody>
            {beverages.map((beverage, index) => (
              <tr key={index}>
                <td style={{ width: '50%', textAlign: 'center' }}>
                  <img src={beverage.image} alt={beverage.name} style={{
                    width: '100px', // Set to 100 pixels width
                    height: '100px', // Set to 100 pixels height
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }} />
                </td>
                <td style={{
                  fontFamily: 'Times New Roman',
                  fontSize: '25px',
                  padding: '10px',
                  textAlign: 'left'
                }}>
                  {beverage.name}
                </td>
                <td style={{
                  fontFamily: 'Times New Roman',
                  fontSize: '25px',
                  padding: '10px',
                  textAlign: 'left'
                }}>
                  {beverage.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Info2;
