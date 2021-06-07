import { createContext, useState } from 'react';

const CardFormContext = createContext();

const CardFormContextProvider = ({ children }) => {
  const [company, setCompany] = useState('');
  const [numbers, setNumbers] = useState({ first: '', second: '', third: '', fourth: '' });
  const [validDay, setValidDay] = useState({ month: '', year: '' });
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState({ firstDigit: '', secondDigit: '' });
  const [companyValidity, setCompanyValidity] = useState(true);
  const [numbersValidity, setNumbersValidity] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
  });
  const [validDayValidity, setValidDayValidity] = useState({ month: true, year: true });
  const [cvcValidity, setCvcValidity] = useState(true);
  const [passwordValidity, setPasswordValidity] = useState({ firstDigit: true, secondDigit: true });

  return (
    <CardFormContext.Provider
      value={{
        company,
        setCompany,
        numbers,
        setNumbers,
        validDay,
        setValidDay,
        owner,
        setOwner,
        cvc,
        setCvc,
        password,
        setPassword,
        companyValidity,
        setCompanyValidity,
        numbersValidity,
        setNumbersValidity,
        validDayValidity,
        setValidDayValidity,
        cvcValidity,
        setCvcValidity,
        passwordValidity,
        setPasswordValidity,
      }}
    >
      {children}
    </CardFormContext.Provider>
  );
};

export default CardFormContextProvider;
export { CardFormContext };
