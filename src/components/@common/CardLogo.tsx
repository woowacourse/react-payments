import { Dispatch, SetStateAction, useContext } from 'react';
import * as Styled from './CardLogo.styles';
import { RefContext } from '../../contexts/RefProvider';

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
  const cardRefs = useContext(RefContext);

  const handleCardCompany = () => {
    setCardCompany(companyName);
    setIsModalOpen(false);
    focusWhenFirstCardNumberEmpty();
  };

  const focusWhenFirstCardNumberEmpty = () => {
    cardRefs[0].current?.value.length !== 4 && cardRefs[0].current?.focus();
  };

  return (
    <Styled.Wrapper onClick={handleCardCompany}>
      <img src={companyImage} alt="로고" />
      <Styled.Text>{companyName}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default CardLogo;
