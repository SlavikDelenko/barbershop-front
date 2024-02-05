import React from 'react';
import backgroundImage from './path-to-your-background-image.jpg'; // Замініть шлях на свій

const Home = () => {
  const containerStyle = {
    height: '93vh', 
    backgroundImage: `url(https://assets-global.website-files.com/644a9d9ce529ef8812f82a28/647fb85c69e95444243ef9bd_Henley%27s%20Gentlemen%27s%20Grooming%20-%20Barbershop%20and%20Mens%20Grooming.webp)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',

  };

  return (
    <>
      <div style={containerStyle}>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 absolute bottom-4 right-4">
          Support Ukraine
        </button>
      </div>
    </>
  );
};

export default Home;
