import styled from 'styled-components';
import {
  CardCompany,
  KOR_NAME_BY_CARD_COMPANY,
  ICON_BY_CARD_COMPANY,
} from '../../@types/cardCompany';
import { useContext } from 'react';
import { CreditCardContext } from '../../contexts/CreditCardContext';

type Props = {
  cardCompany: CardCompany;
  onClose: () => void;
};

const BankIconBox = ({ cardCompany, onClose }: Props) => {
  const KoreanName = KOR_NAME_BY_CARD_COMPANY[cardCompany];
  const { setCreditCard } = useContext(CreditCardContext);

  const handleClickImage: React.MouseEventHandler<HTMLImageElement> = (event) => {
    const company = event.currentTarget?.dataset['company'] as CardCompany;

    if (!setCreditCard) return;
    setCreditCard('cardCompany', company);
    onClose();
  };

  return (
    <ImageContainer>
      <StyledBankImage
        data-company={cardCompany}
        src={ICON_BY_CARD_COMPANY[cardCompany]}
        onClick={handleClickImage}
      ></StyledBankImage>
      <p>{KoreanName}</p>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBankImage = styled.img`
  width: 37px;
  height: 37px;
  margin: auto;
`;

export default BankIconBox;
