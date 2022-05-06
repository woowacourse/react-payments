import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TYPES } from 'store/card/types';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import PageTitle from 'components/PageTitle';
import AnotherCard from 'components/AnotherCard';
import Card from 'components/Card';
import FlexColumnBox from 'components/FlexColumnBox';
import Container from 'components/Container';
import PointerBox from 'components/PointerBox/PointerBox';
import DroppableArea from 'common/DragDrop/DroppableArea';
import DraggableCard from 'common/DragDrop/DraggableCard';

function CardList() {
  const navigate = useNavigate();
  const { cards } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onClickPrev = () => {
    navigate('/add-card');
  };
  return (
    <Container>
      <PageTitle hasPrevButton={false}>보유 카드</PageTitle>
      <FlexColumnBox>
        <DroppableArea cards={cards} dispatch={dispatch} type={TYPES.SET_CARD_ORDER}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {cards.map((card, index) => (
                <DraggableCard key={card.id} card={card} index={index}>
                  <Card
                    cardNumber={card.cardNumber}
                    cardExpiration={card.cardExpiration}
                    cardOwner={card.cardOwner}
                    cardName={card.cardName}
                    cardColor={card.cardColor}
                    isSmall={true}
                  />
                  <Styled.CardNickname>{card.cardNickname}</Styled.CardNickname>
                </DraggableCard>
              ))}
              {provided.placeholder}
            </div>
          )}
        </DroppableArea>
        <PointerBox onClick={onClickPrev}>
          <AnotherCard />
        </PointerBox>
      </FlexColumnBox>
    </Container>
  );
}

export default CardList;

const Styled = {
  CardNickname: styled.span`
    font-size: 19px;
  `,
};
