import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from 'components/Card';
import { UnderlineInput } from 'components/Input';
import Button from 'components/Button';
import { Container, Title, CardSection } from './style';
import { useCardListContext } from 'context/cardList';
import { CARD_SIZE } from 'constant/';

function CardAddCompletionPage() {
  const cardAliasInput = useRef(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { updateCardInfo, getCardInfo } = useCardListContext();

  const cardInfo = getCardInfo(state.cardId);

  const handleClickConfirmButton = () => {
    const cardAlias = cardAliasInput.current.value;

    updateCardInfo({ ...cardInfo, alias: cardAlias });
    navigate('/');
  };

  return (
    <Container>
      <Title>카드등록이 완료되었습니다.</Title>
      <CardSection>
        <Card {...cardInfo} size={CARD_SIZE.LARGE} />
      </CardSection>
      <UnderlineInput
        ref={cardAliasInput}
        style={{ marginTop: '13px' }}
        type="text"
        maxLength="30"
      />
      <Button style={{ margin: '172px 0 0 auto' }} type="button" onClick={handleClickConfirmButton}>
        확인
      </Button>
    </Container>
  );
}

export default CardAddCompletionPage;
