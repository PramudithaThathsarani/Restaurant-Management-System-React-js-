import React from 'react';
import bday from '../../image/bday1.jpg';
import meet from '../../image/eve1.jpg';
import anni from '../../image/anni.jpg';

const Info1 = () => {
  return (
    // Main container with flexbox properties for centering content
    <div style={{
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      {/* Card container with flexbox properties for layout */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '50px'
      }}>

        {/* First card section with text */}
        <div style={{
          flex: '0 0 30%',
          padding: '80px',
          backgroundColor: '#565051',
          color: '#fff',
          textAlign: 'center'
        }}>
          <h1>Birthday Party</h1>
          <p>Mangez sainement mais délicieusement. Nos clients sont rois, nos clients sont nos patrons.</p>
        </div>

        {/* First card section with image */}
        <div>
          <img src={bday} alt="Values" style={{
            height: '300px',
            width: '500px',
            marginTop: '5px'
          }} />
        </div>

        {/* Second card section with text */}
        <div style={{
          flex: '0 0 30%',
          padding: '80px',
          backgroundColor: '#565051',
          color: '#fff',
          textAlign: 'center',
          marginTop: '30px' // Adds space between the first and second sets of content
        }}>
          <h1>Meetup</h1>
          <p>Mangez sainement mais délicieusement. Nos clients sont rois, nos clients sont nos patrons.</p>
        </div>
        
        {/* Second card section with image */}
        <div>
          <img src={meet} alt="Values" style={{
            height: '300px',
            width: '500px',
            marginTop: '15px',
            marginTop: '30px' // Adds space between the first and second sets of content
          }} />
        </div>

        {/* third card section with text */}
        <div style={{
          flex: '0 0 30%',
          padding: '80px',
          backgroundColor: '#565051',
          color: '#fff',
          textAlign: 'center',
          marginTop: '30px' // Adds space 
        }}>
          <h1>Anniversary Party</h1>
          <p>Mangez sainement mais délicieusement. Nos clients sont rois, nos clients sont nos patrons.</p>
        </div>
        
        {/* third card section with image */}
        <div>
          <img src={anni} alt="Values" style={{
            height: '300px',
            width: '500px',
            marginTop: '15px',
            marginTop: '30px' // Adds space 
          }} />
        </div>
      </div>
      </div>

   
  );
}

export default Info1;
