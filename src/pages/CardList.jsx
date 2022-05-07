import { useContext, useState } from 'react';
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
import CardConfirmModal from 'containers/CardConfirmModal';
import ClickCardBox from 'common/ClickCardBox';

function CardList() {
  const navigate = useNavigate();
  const { cards } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);
  const [cardData, setCardData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickPrev = () => {
    navigate('/add-card');
  };

  const onClickCard = (cardData) => {
    setCardData(cardData);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <PageTitle hasPrevButton={false}>보유 카드</PageTitle>
      <FlexColumnBox>
        <DroppableArea cards={cards} dispatch={dispatch} type={TYPES.SET_CARD_ORDER}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {cards.map((cardData, index) => (
                <ClickCardBox key={cardData.id} onClick={() => onClickCard(cardData)}>
                  <DraggableCard card={cardData} index={index}>
                    <Card
                      cardNumber={cardData.cardNumber}
                      cardExpiration={cardData.cardExpiration}
                      cardOwner={cardData.cardOwner}
                      cardName={cardData.cardName}
                      cardColor={cardData.cardColor}
                      isSmall={true}
                    />
                    <Styled.CardNickname>{cardData.cardNickname}</Styled.CardNickname>
                  </DraggableCard>
                </ClickCardBox>
              ))}
              {provided.placeholder}
            </div>
          )}
        </DroppableArea>
        <PointerBox onClick={onClickPrev}>
          <AnotherCard />
        </PointerBox>
      </FlexColumnBox>
      {isModalOpen && (
        <Container>
          <CardConfirmModal cardData={cardData} onCloseModal={onCloseModal} />
        </Container>
      )}
    </Container>
  );
}

export default CardList;

const Styled = {
  CardNickname: styled.span`
    font-size: 19px;
  `,
};
