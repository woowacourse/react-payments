import Styled from './style';
import { CreditCard, CARD_SIZE } from '../../components/commons/card/CreditCard';
import { TransparentInput } from '../../components/commons/input/TransparentInput';
import { Button } from '../../components/commons/button/Button';
import { PAGE } from '../../constants/page';
import { COLOR } from '../../constants/color';

const transparentInputStyles = {
  textAlign: 'center',
  fontSize: '18px',
  color: '#383838',
};

const CardCreationCompletePage = ({ setCurrentPage }) => {
  return (
    <>
      <Styled.Title>카드등록이 완료되었습니다.</Styled.Title>
      <CreditCard size={CARD_SIZE.LG} />
      <Styled.InputContainer>
        <TransparentInput styles={transparentInputStyles} />
      </Styled.InputContainer>
      <Styled.ButtonContainer>
        <Button onClick={() => setCurrentPage(PAGE.CARD_LIST)} styles={{ color: COLOR.MINT }}>
          확인
        </Button>
      </Styled.ButtonContainer>
    </>
  );
};

export default CardCreationCompletePage;
