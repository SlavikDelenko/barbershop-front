import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url(https://sokyra.com.ua/img/background.jpg)" }}>
      {/* Header поверх картинки */}
      <div className="absolute top-0 left-0 right-0 p-4 text-white">
        <div className="flex items-center justify-between font-sans font-montserrat text-xl">
          <img src="" alt="" />

          <div className="hidden md:flex items-center space-x-4 ml-20 mt-10">
            <Link to="/" className="hover:text-gray-400 pr-10">Головна</Link>
            <Link to="/services" className="hover:text-gray-400 pr-10">Послуги</Link>
            <Link to="/about" className="hover:text-gray-400 pr-10">Про нас</Link>
          </div>

          {/* Бургер-меню для мобільних пристроїв */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={toggleMenu}>
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>

            {/* Відображення бургер-меню при відкритті */}
            {isOpen && (
              <div className="absolute top-16 left-0 w-full h-96 bg-gray-200 bg-opacity-35 flex items-center justify-center">
                <div className="text-white text-2xl">
                  <Link to="/" onClick={toggleMenu} className="block py-2">Головна</Link>
                  <Link to="/services" onClick={toggleMenu} className="block py-2">Послуги</Link>
                  <Link to="/about" onClick={toggleMenu} className="block py-2">Про нас</Link>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4 ml-auto mr-20 mt-10">
            <img src="https://cdn-icons-png.flaticon.com/128/6703/6703584.png" alt="Логотип" className="h-16 w-18" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
