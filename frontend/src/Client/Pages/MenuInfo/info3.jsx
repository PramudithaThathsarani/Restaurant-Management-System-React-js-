import React from 'react';
import vanilla from '../../image/vanilla.jpg';
import choco from '../../image/choco.jpg';
import Strawberry from '../../image/Strawberry.jpg'
import mango from '../../image/mangomilk.jpg'
import banana from '../../image/banana.jpg'

const beverages = [
  {
    image: vanilla,
    name: 'Vanilla Milkshakes',
    price: 'Rs.510/=',
  },
  {
    image: choco,
    name: 'Chocolate Milkshakes',
    price: 'Rs.510/=',
  },
  {
    image: Strawberry,
    name: 'Strawberry Milkshakes',
    price: 'Rs.510/=',
  },
 
  {
    image: mango,
    name: 'Mango Milkshake',
    price: 'Rs.660/=',
  },
  {
    image: banana,
    name: 'Banana Milkshakes',
    price: 'Rs.510/=',
  },
 

  // Add more beverage objects here
];

const Info3 = () => {
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
              }}>Milkshakes</th>
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

export default Info3;
