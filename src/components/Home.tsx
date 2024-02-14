import React from 'react';
import Team from './Team';
import About from './About';
import { Button } from "@material-tailwind/react";

type HomeProps = {
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  }
const Home = ({position = 'relative'} : HomeProps) => {
  const containerStyle = {
    height: '100vh',
    position, 
  };

  return (
    <>
      <div style={containerStyle}>
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="https://www.admin-menshall.info/wp-content/uploads/2023/12/new-small2-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <button className="fixed text-white px-4 py-2  bottom-4 right-4">
             <Button placeholder={""} variant="filled" className='bg-green-500'>Support Ukraine</Button>
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
