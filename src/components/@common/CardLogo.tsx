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
  return (
    <Styled.Wrapper
      onClick={() => {
        setCardCompany(companyName);
        setIsModalOpen(false);
      }}
    >
      <img src={companyImage} alt="로고" />
      <Styled.Text>{companyName}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default CardLogo;
