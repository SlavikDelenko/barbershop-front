import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-cover bg-center bg-black text-white">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row items-center">
          {/* Текстовий блок */}
          <div className="md:w-1/2 md:mr-12 bg-blue-gray-400 bg-opacity-20 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Про нас</h2>
            <p className="text-xl mb-6">
              Ми - ваші надійні та талановиті майстри, готові створити найстильніші зачіски та стрижки,
              які підкреслять вашу унікальність. З нашим досвідом і страстю до нашої роботи, ви можете
              бути впевнені, що ви отримаєте лише найкраще обслуговування.
            </p>
            <p className="text-lg">
              Наша мета - забезпечити вас не тільки ідеальною зачіскою, але і незабутнім досвідом в нашому
              барбершопі. Приходьте до нас та насолоджуйтесь процесом догляду за своїм виглядом!
            </p>
          </div>
          {/* Зображення */}
          <div className="md:w-1/2">
            <img
              src="https://i.pinimg.com/564x/39/78/78/39787845ccf9edf0d365ccf7b05fee99.jpg"
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
