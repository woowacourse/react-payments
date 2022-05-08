import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UnderlineInput } from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import Card from 'components/Molecules/Card';
import { Container, Title, CardSection, Form } from './style';
import { useCardListContext } from 'context/cardList';
import { CARD_SIZE } from 'constant/';
import PATH from 'constant/path';

function CardAddCompletionPage() {
  const cardAliasInput = useRef(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { updateCardInfo, getCardInfo } = useCardListContext();

  const cardInfo = getCardInfo(state.cardId);

  const handleSubmitForm = event => {
    event.preventDefault();

    const cardAlias = cardAliasInput.current.value;

    updateCardInfo({ ...cardInfo, alias: cardAlias });
    navigate(PATH.DEFAULT, { replace: true });
  };

  return (
    <Container>
      <Title>카드등록이 완료되었습니다.</Title>
      <CardSection>
        <Card {...cardInfo} size={CARD_SIZE.LARGE} />
      </CardSection>
      <Form onSubmit={handleSubmitForm}>
        <UnderlineInput
          ref={cardAliasInput}
          style={{ alignSelf: 'center' }}
          type="text"
          maxLength="30"
        />
        <Button style={{ alignSelf: 'flex-end' }} type="submit">
          확인
        </Button>
      </Form>
    </Container>
  );
}

export default CardAddCompletionPage;
