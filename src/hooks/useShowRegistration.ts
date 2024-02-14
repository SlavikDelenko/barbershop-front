import { useState } from 'react';
type ShowRegistrationHookType = [boolean, () => void];
const useShowRegistration = (): ShowRegistrationHookType => {
    
  const [showRegistrationForm, setShowRegistrationForm] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  return [showRegistrationForm, handleButtonClick]; 
};

export default useShowRegistration;
