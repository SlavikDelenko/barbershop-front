import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from "@material-tailwind/react";


const OnlineRegistrationForm = ({handleButtonClick}:any) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedBarber, setSelectedBarber] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSubmit = (event:any) => {
        event.preventDefault();
        // Тут ви можете додати логіку для обробки поданих даних
        console.log('Submitted:', { name, email, phoneNumber, selectedBarber, selectedService, selectedDate });
        // Очистити поля після надсилання
        setName('');
        setEmail('');
        setPhoneNumber('');
        setSelectedBarber('');
        setSelectedService('');
        setSelectedDate(null);
    };

    return (
        <div className="fixed inset-0 overflow-auto bg-gray-500 bg-opacity-75 flex  justify-end h-screen items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-screen">
                <h2 className="text-xl font-bold mb-4">Форма онлайн реєстрації</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ім'я</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Номер телефону</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="barber" className="block text-sm font-medium text-gray-700">Барбер</label>
                        <select
                            id="barber"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={selectedBarber}
                            onChange={(e) => setSelectedBarber(e.target.value)}
                            required
                        >
                            <option value="">Виберіть барбера</option>
                            <option value="barber1">Барбер 1</option>
                            <option value="barber2">Барбер 2</option>
                            {/* Додайте інші варіанти */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Послуга</label>
                        <input
                            type="text"
                            id="service"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Дата та час</label>
                        <DatePicker
                            id="date"
                            selected={selectedDate}
                            onChange={(date:any) => setSelectedDate(date)}
                            showTimeSelect
                            dateFormat="Pp"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <div

                            className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white"
                        >   <Button type='submit' variant="outlined" className='mr-10' onClick={handleButtonClick}>Відхилити</Button>
                            <Button type='submit' variant="gradient">записатися</Button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default OnlineRegistrationForm;
