import { ReactNode } from 'react';

import { setCardCompany } from '../../types/state';

import * as styled from './CardCompanyButton.styled';

interface CardCompanyButtonProps {
  Logo: ReactNode;
  name: string;
  theme: string;
  setCardCompany: setCardCompany;
}

const CardCompanyButton = ({ Logo, name, theme, setCardCompany }: CardCompanyButtonProps) => {
  const handleClick = () => {
    setCardCompany({
      name: name,
      theme: theme,
    });
  };

  return (
    <styled.CardCompanyButton onClick={handleClick}>
      {Logo}
      <p>{name}</p>
    </styled.CardCompanyButton>
  );
};

export default CardCompanyButton;
