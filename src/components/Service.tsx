import React from 'react';
import { Button } from "@material-tailwind/react";
import OnlineRegistrationForm from '../form/OnlineRegistrationForm';
import useShowRegistration from '../hooks/useShowRegistration';

const Service = () => {
  const [showRegistrationForm, handleButtonClick] = useShowRegistration();

  return (
    <div className='mt-20'>
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Наші послуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Послуга 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">Стрижка та укладка</h3>
                <p className="text-gray-600 mt-4">
                  Наші досвідчені майстри здійснюють професійну стрижку та укладку відповідно до вашого стилю та побажань.
                </p>
              </div>
              <Button placeholder={''} variant="outlined" onClick={handleButtonClick}>Онлайн запис</Button>
            </div>
            {/* Послуга 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">Бриття бороди</h3>
                <p className="text-gray-600 mt-4">
                  Відчуйте справжню гордість за вашу бороду після процедури бриття в нашому барбершопі. Ми дбаємо про ваш вигляд з усіх сторін.
                </p>
              </div>
              <Button placeholder={''} className='mt-5' variant="outlined" onClick={handleButtonClick}>Онлайн запис</Button>
            </div>
            {/* Послуга 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">Масаж голови</h3>
                <p className="text-gray-600 mt-4">
                  Розслабтеся та відпочиньте під час масажу голови в нашому комфортному закладі. Ви забудете про буденні турботи і втому.
                </p>
              </div>
              <Button placeholder={''} variant="outlined" onClick={handleButtonClick}>Онлайн запис</Button>
            </div>
          </div>
        </div>
      </div>
      {showRegistrationForm && <OnlineRegistrationForm handleButtonClick={handleButtonClick}/>}
    </div>
  );
};

export default Service;
