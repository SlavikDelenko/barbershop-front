import { Button } from "@material-tailwind/react";
const Home = () => {
  const containerStyle = {
    height: '92vh', 
    backgroundImage: `url(https://img1.wsimg.com/isteam/ip/c118cbcb-d10b-44fc-b513-6c49ad791ec3/blob.png/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25)`,
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
