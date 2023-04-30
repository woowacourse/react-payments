import { cardCompanies } from '../../constants/cards';
import { CardCompanyName } from '../../types/Card';
import CardSvgIcon from '../Svg/CardSvgIcon';
import * as Styled from './BottomSheet.styles';

interface BottomSheetProps {
  checkCardCompany: (value: CardCompanyName) => void;
  closeBottomSheet: () => void;
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

const BottomSheet = ({
  checkCardCompany,
  closeBottomSheet,
}: BottomSheetProps) => {
  const handleCardIconClick = (name: string) => {
    if (!isCardCompany(name)) return;
    checkCardCompany(name);
    closeBottomSheet();
  };

  return (
    <>
      <Styled.BackDrop />
      <Styled.Wrapper>
        {cardCompanies.map(({ type, name }) => (
          <Styled.IconWrapper
            onClick={() => handleCardIconClick(name)}
            key={type}
          >
            <CardSvgIcon type={type} size={36} />
            <p>{name}</p>
          </Styled.IconWrapper>
        ))}
      </Styled.Wrapper>
    </>
  );
};

export default BottomSheet;
