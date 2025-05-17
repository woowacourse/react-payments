import { useState } from 'react';

export const useProgressForm = () => {
  const [showCardBrand, setShowCardBrand] = useState(false);
  const [showCardPeriod, setShowCardPeriod] = useState(false);
  const [showCardCVC, setShowCardCVC] = useState(false);
  const [showCardPassword, setShowCardPassword] = useState(false);

  const showBrandStep = () => {
    setShowCardBrand(true);
  };

  const showPeriodStep = () => {
    setShowCardPeriod(true);
  };

  const showCVCStep = () => {
    setShowCardCVC(true);
  };

  const showPasswordStep = () => {
    setShowCardPassword(true);
  };

  return {
    showCardBrand,
    showCardPeriod,
    showCardCVC,
    showCardPassword,
    showBrandStep,
    showPeriodStep,
    showCVCStep,
    showPasswordStep
  };
};
