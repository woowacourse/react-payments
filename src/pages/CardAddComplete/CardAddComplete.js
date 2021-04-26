import { useLocation, Redirect } from 'react-router-dom';
import Styled from './CardAddComplete.styles';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { ScreenContainer } from '../common/common.styles';
import MESSAGE from '../../constants/message';

const CardAddComplete = () => {
  const location = useLocation();

  if (!location.state.card) return <Redirect to="/" />;

  const {
    cardCompanyName,
    cardCompanyColor,
    ownerName,
    expiryDate,
    cardNumbers,
  } = location.state.card;

  return (
    <ScreenContainer>
      <Styled.Container>
        <Styled.Header>{MESSAGE.CARD_ADD_COMPLETE}</Styled.Header>
        <Card
          size="large"
          bgColor={cardCompanyColor}
          companyName={cardCompanyName}
          cardNumbers={cardNumbers}
          ownerName={ownerName}
          expiryDate={expiryDate}
        />
        <Styled.InputContainer>
          <Input
            simple
            textAlign="center"
            placeholder="카드 별칭 (선택)"
            autoFocus
            maxLength={10}
          />
        </Styled.InputContainer>
        <Styled.ButtonContainer>
          <Button>확인</Button>
        </Styled.ButtonContainer>
      </Styled.Container>
    </ScreenContainer>
  );
};

export default CardAddComplete;
