import { useState, createContext } from 'react';

const initialCardInfo = {
  number: { first: '', second: '', third: '', fourth: '' },
  company: { name: '', color: '' },
  expirationDate: { month: '', year: '' },
  ownerName: '',
  isOwnerNameFilled: false,
  securityCode: '',
  password: { first: '', second: '' },
  nickname: '',
};

export const CardInfoContext = createContext();

export const CardInfoContextProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState(initialCardInfo);

  const setNumber = (number) => setCardInfo((prevState) => ({ ...prevState, number }));
  const setCompany = (company) => setCardInfo((prevState) => ({ ...prevState, company }));
  const setExpirationDate = (expirationDate) => setCardInfo((prevState) => ({ ...prevState, expirationDate }));
  const setOwnerName = (ownerName) => setCardInfo((prevState) => ({ ...prevState, ownerName }));
  const setIsOwnerNameFilled = (isOwnerNameFilled) => setCardInfo((prevState) => ({ ...prevState, isOwnerNameFilled }));
  const setSecurityCode = (securityCode) => setCardInfo((prevState) => ({ ...prevState, securityCode }));
  const setPassword = (password) => setCardInfo((prevState) => ({ ...prevState, password }));
  const setNickname = (nickname) => setCardInfo((prevState) => ({ ...prevState, nickname }));

  return (
    <CardInfoContext.Provider
      value={{
        cardInfo,
        ...cardInfo,
        initialCardInfo,
        initialOwnerName: initialCardInfo.ownerName,
        setCardInfo,
        setNumber,
        setCompany,
        setExpirationDate,
        setOwnerName,
        setIsOwnerNameFilled,
        setSecurityCode,
        setPassword,
        setNickname,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};
