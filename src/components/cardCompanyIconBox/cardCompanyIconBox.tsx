import {
  CardCompanyEng,
  KOR_NAME_BY_CARD_COMPANY,
  ICON_BY_CARD_COMPANY,
} from '../../@types/cardCompany';
import { useContext } from 'react';
import { CreditCardContext } from '../../contexts/CreditCardContext';
import CreditCardContextType from '../../@types/creditCardContextType';
import { ImageContainer, StyledBankImage } from './CardCompanyIconBox.style';

type Props = {
  cardCompany: CardCompanyEng;
  onClose: () => void;
};

const CardCompanyIconBox = ({ cardCompany, onClose }: Props) => {
  const KoreanName = KOR_NAME_BY_CARD_COMPANY[cardCompany];
  const { setCreditCard } = useContext(CreditCardContext) as CreditCardContextType;

  const handleClickImage: React.MouseEventHandler<HTMLImageElement> = (event) => {
    const company = event.currentTarget.dataset['company'] as CardCompanyEng;

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

export default CardCompanyIconBox;
