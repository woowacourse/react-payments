import { useState, createContext } from 'react';
import { initialCardInfo } from '../constants/card';

export const CardInfoContext = createContext();

export const cardInfoProvider = () => {
  const [cardInfo, setCardInfo] = useState(initialCardInfo);
  const [checkInputCompleted, setCheckInputCompleted] = useState({
    cardNumbers: false,
    expireDate: false,
    CVC: false,
    ownerName: false,
    password: false,
    cardType: false,
  });

  return {
    CardInfoContext,
    value: {
      cardInfo,
      checkInputCompleted,
      setCardNumber: (key, value) => {
        setCardInfo((prev) => ({
          ...prev,
          cardNumbers: { ...prev.cardNumbers, [key]: value },
        }));
      },
      setCardExpireDate: (key, value) => {
        setCardInfo((prev) => ({
          ...prev,
          expireDate: { ...prev.expireDate, [key]: value },
        }));
      },
      setCVC: (value) => {
        setCardInfo((prev) => ({ ...prev, CVC: value }));
      },
      setCardOwnerName: (value) => {
        setCardInfo((prev) => ({ ...prev, ownerName: value }));
      },
      setCardPassword: (key, value) => {
        setCardInfo((prev) => ({
          ...prev,
          password: { ...prev.password, [key]: value },
        }));
      },
      setCardType: (value) => {
        setCardInfo((prev) => ({ ...prev, cardType: value }));
      },
      setInputCompleted: (key, isCompleted) => {
        setCheckInputCompleted((prev) => ({
          ...prev,
          [key]: isCompleted,
        }));
      },
    },
  };
};
