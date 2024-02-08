import React from 'react';
import Team from './Team';
import About from './About';


type HomeProps = {
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  }
const Home = ({position = 'relative'} : HomeProps) => {
  const containerStyle = {
    height: '92vh',
    position, 
  };

  return (
    <>
      <div style={containerStyle}>
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="https://www.admin-menshall.info/wp-content/uploads/2023/12/new-small2-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 absolute bottom-4 right-4">
          Support Ukraine
        </button>
        <div>
            <About />
            <Team />
        </div>
      </div>
    </>
  );
};

export default Home;
