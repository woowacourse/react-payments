import { cardCompanies } from '../../constants/cards';
import SvgIcon from '../Svg/SvgIcon';
import * as Styled from './BottomSheet.styles';

interface BottomSheetProps {
  checkCardCompany: (value: string) => void;
  closeBottomSheet: () => void;
}

const BottomSheet = ({
  checkCardCompany,
  closeBottomSheet,
}: BottomSheetProps) => {
  const handleCardIconClick = (name: string) => {
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
            <SvgIcon type={type} size={36} />
            <p>{name}</p>
          </Styled.IconWrapper>
        ))}
      </Styled.Wrapper>
    </>
  );
};

export default BottomSheet;
