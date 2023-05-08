import { cardCompanies } from '../../constants/cards';
import { CardCompanyName } from '../../types/Card';
import CardSvgIcon from '../Svg/CardSvgIcon';
import * as Styled from './CardComapnyIcons.styles';

interface CardComapnyIconsProps {
  onSetCardCompany: (value: CardCompanyName) => void;
  closeBottomSheet: () => void;
  onSetFirstCardNumbers: (cardCompanyName: CardCompanyName) => void;
}

const isCardCompany = (value: string): value is CardCompanyName => {
  return [
    'BC카드',
    '신한카드',
    '카카오뱅크',
    '현대카드',
    '우리카드',
    '롯데카드',
    '하나카드',
    '국민카드',
  ].includes(value);
};

const CardComapnyIcons = ({
  onSetCardCompany,
  closeBottomSheet,
  onSetFirstCardNumbers,
}: CardComapnyIconsProps) => {
  const handleCardIconClick = (name: string) => {
    if (!isCardCompany(name)) return;
    onSetCardCompany(name);
    onSetFirstCardNumbers(name);
    closeBottomSheet();
  };

  return (
    <Styled.Wrapper>
      {cardCompanies.map(({ type, name }) => (
        <Styled.IconWrapper
          onClick={() => handleCardIconClick(name)}
          key={type}
        >
          <CardSvgIcon type={type} />
          <p>{name}</p>
        </Styled.IconWrapper>
      ))}
    </Styled.Wrapper>
  );
};

export default CardComapnyIcons;
