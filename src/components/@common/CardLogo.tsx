import { Dispatch, SetStateAction } from 'react';
import * as Styled from './CardLogo.styles';

interface CardLogoProps {
  companyImage: string;
  companyName: string;
  setCardCompany: Dispatch<SetStateAction<string>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const CardLogo = ({
  companyImage,
  companyName,
  setCardCompany,
  setIsModalOpen,
}: CardLogoProps) => {
  const handleCardCompany = () => {
    setCardCompany(companyName);
    setIsModalOpen(false);
  };

  return (
    <Styled.Wrapper onClick={handleCardCompany}>
      <img src={companyImage} alt="로고" />
      <Styled.Text>{companyName}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default CardLogo;
