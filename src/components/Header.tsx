import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white p-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
      {/* Бургер-меню для мобільних пристроїв (зліва) */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none relative" onClick={toggleMenu} style={{ top: '-2px' }}>
          <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Відображення бургер-меню при відкритті */}
        {isOpen && (
          <div className="absolute top-14 left-0 w-full h-screen bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="text-white text-2xl">
              <Link to="/" onClick={toggleMenu} className="block py-2">Головна</Link>
              <Link to="/service" onClick={toggleMenu} className="block py-2">Послуги</Link>
              {/* <Link to="/about" onClick={toggleMenu} className="block py-2">Про нас</Link> */}
              {/* <Link to='/team' onClick={toggleMenu} className="block py-2">Команда</Link> */}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center mx-20 md:mx-auto md:px-4 md:max-w-7xl">
        <div className="hidden md:flex items-center space-x-4 text-2xl">
            <Link to="/" className="px-7 ">Головна</Link>
            <div className="flex items-center space-x-4">
                <img src="https://www.luckyclub.com.ua/wp-content/themes/lucky-club/img/logo-white.svg" alt="Логотип" className="h-20 w-auto md:h-16 md:w-auto"  />
            </div>
            <Link to="/service" className="px-7">Послуги</Link>
        </div>
    </div>
    </header>
  );
};

export default Header;
