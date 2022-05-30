import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UnderlineInput } from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import Card from 'components/Molecules/Card';
import { useCardListContext } from 'context/cardList';
import { CARD_SIZE } from 'constant';
import PATH from 'constant/path';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 27px 16px;
`;

const Title = styled.span`
  margin-top: 130px;
  font-style: normal;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #383838;
`;

const CardSection = styled.section`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 77px;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  margin-top: 13px;
  flex-direction: column;
  gap: 172px;
`;

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
    navigate(PATH.CARD_LIST, { replace: true });
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
