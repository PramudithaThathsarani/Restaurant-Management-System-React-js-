import React from 'react';
import ptea from '../../image/ptea.jpg';
import pcoffee from '../../image/pcoffee.jpg';
import tmilk from '../../image/tmilk.jpg'
import icecof from '../../image/icecoffee.jpg'
import bcoffee from '../../image/blcoffee.jpg'
import ncafe from '../../image/nescafe.jpg'
import pltea from '../../image/plaintea.jpg'

const beverages = [
  {
    image: ptea,
    name: 'Pot of Tea',
    price: 'Rs.460/=',
  },
  {
    image: pcoffee,
    name: 'Pot of Coffee',
    price: 'Rs.460/=',
  },
  {
    image: tmilk,
    name: 'Tea with Milk',
    price: 'Rs.150/=',
  },
 
  {
    image: icecof,
    name: 'Ice Coffee',
    price: 'Rs.300/=',
  },
  {
    image: bcoffee,
    name: 'Black Coffee',
    price: 'Rs.100/=',
  },
  {
    image: ncafe,
    name: 'Nesacafe with Milk',
    price: 'Rs.1200/=',
  },
  {
    image: pltea,
    name: 'Plain Tea',
    price: 'Rs.70/=',
  },
 

  // Add more beverage objects here
];

const Info4 = () => {
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
              }}>Tea and Coffee</th>
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

export default Info4;
