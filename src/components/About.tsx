import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-12 bg-black w-full h-full text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Про нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-white mb-4 text-xl">
              Барбершоп - це не тільки місце, де можна отримати якісну стрижку та гарний вигляд, але і місце, де можна відпочити, поспілкуватися та насолодитися атмосферою спільноти.
            </p>
            <p className="text-white mb-4 text-xl">
              У нашому барбершопі працюють найкращі майстри, які завжди готові підкреслити ваш стиль та допомогти вам виглядати краще.
            </p>
            <p className="text-white mb-4 text-xl">
              Ми пропонуємо широкий спектр послуг, від класичних стрижок до модернізованих зачісок та бриття.
            </p>
            <p className="text-white mb-4 text-xl">
              Наші майстри мають багаторічний досвід і вміють працювати з будь-якими типами волосся.
            </p>
            <p className="text-white mb-4 text-xl">
              Ми прагнемо зробити кожне ваше відвідування незабутнім та приємним досвідом.
            </p>
            <p className="text-white mb-4 text-xl">
              Запрошуємо вас завітати до нашого барбершопу та насолодитися персоналізованим сервісом на вищому рівні.
            </p>
            <Link to="/services" className="text-blue-600 hover:underline">Дізнатися більше про наші послуги</Link>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://lh3.googleusercontent.com/p/AF1QipPvWTqwdWGlEJQ-zWNMamHwBIUcT2Zz0KS2twKZ=w1080-h608-p-no-v0" alt="Interior 1" className="rounded-lg animate-fade-in" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipPvWTqwdWGlEJQ-zWNMamHwBIUcT2Zz0KS2twKZ=w1080-h608-p-no-v0" alt="Interior 2" className="rounded-lg animate-fade-in" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipPvWTqwdWGlEJQ-zWNMamHwBIUcT2Zz0KS2twKZ=w1080-h608-p-no-v0" alt="Interior 3" className="rounded-lg animate-fade-in" />
              <img src="https://lh3.googleusercontent.com/p/AF1QipPvWTqwdWGlEJQ-zWNMamHwBIUcT2Zz0KS2twKZ=w1080-h608-p-no-v0" alt="Interior 4" className="rounded-lg animate-fade-in" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
