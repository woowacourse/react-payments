import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from 'components/Molecules/Card';
import Head from 'components/Templates/Head';
import { useCardListContext } from 'context/cardList';
import PATH from 'constant/path';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  padding-bottom: 20px;
`;

const HeadTitle = styled.span`
  padding-left: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #383838;
`;

const CardListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  height: 100%;
  margin-top: 65px;
  overflow-y: scroll;
`;

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  opacity: 0.9;
`;

const CardAlias = styled.span`
  color: ${props => (props.isNoneAlias ? '#CACACA' : '#575757')};
`;

const CardAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 123px;
  background: #e5e5e5;
  border-radius: 5px;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #575757;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

function CardListPage() {
  const navigate = useNavigate();
  const { cardList } = useCardListContext();

  const handleClickCardAddButton = () => {
    navigate(PATH.CARD_ADD);
  };

  return (
    <Container>
      <Head leftComponent={<HeadTitle>보유 카드</HeadTitle>} />
      <CardListSection>
        {cardList.map(cardInfo => (
          <CardInfoWrapper key={cardInfo.id}>
            <Card {...cardInfo} />
            <CardAlias isNoneAlias={cardInfo.alias === ''}>
              {!cardInfo.alias ? '별칭 없음' : cardInfo.alias}
            </CardAlias>
          </CardInfoWrapper>
        ))}
        <div>
          <CardAddButton onClick={handleClickCardAddButton}>+</CardAddButton>
        </div>
      </CardListSection>
    </Container>
  );
}

export default CardListPage;
