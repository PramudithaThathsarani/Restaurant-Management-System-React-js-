import React from 'react';
import chiks from '../../image/chikensoup.jpg';
import veg from '../../image/cvegsoup.jpg';
import mushroom from '../../image/mushroomxou.jpg'


const beverages = [
  {
    image: chiks,
    name: 'Cream of Chiken Soup',
    price: 'Rs.540/=',
  },
  {
    image: veg,
    name: 'Cream of Vegetable Soup',
    price: 'Rs.480/=',
  },
  {
    image: mushroom,
    name: 'Cream of Mushroom Soup',
    price: 'Rs.540/=',
  },
 
  
 

  // Add more beverage objects here
];

const Info6 = () => {
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
              }}>Shorteats</th>
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

export default Info6;
