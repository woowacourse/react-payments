import { cardCompanies } from '../../constants/cards';
import SvgIcon from '../Svg/SvgIcon';
import * as Styled from './BottomSheet.styles';

const BottomSheet = () => {
  return (
    <>
      <Styled.BackDrop />
      <Styled.Wrapper>
        {cardCompanies.map(({ type, name }) => (
          <Styled.IconWrapper>
            <SvgIcon type={type} size={36} />
            <p>{name}</p>
          </Styled.IconWrapper>
        ))}
      </Styled.Wrapper>
    </>
  );
};

export default BottomSheet;
