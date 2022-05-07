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
import DeleteCircleButton from 'components/DeleteButton';

function CardList() {
  const navigate = useNavigate();
  const { cards } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);
  const [modalCardData, setModalCardData] = useState();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const onClickCard = (cardData) => {
    setModalCardData(cardData);
    setIsConfirmModalOpen(true);
  };

  const onClickAnotherCard = () => {
    navigate('/add-card');
  };

  const onCloseModal = () => {
    setIsConfirmModalOpen(false);
  };

  const onSubmitForm = (cardData) => (event, nickname) => {
    event.preventDefault();

    const id = cardData.id;
    dispatch({ type: TYPES.UPDATE_NICKNAME, nickname, id });

    onCloseModal();
    navigate('/card-list');
  };

  const onDeleteCard = (id) => {
    if (confirm('삭제하시겠습니까?')) {
      dispatch({ type: TYPES.DELETE_CARD, id });
    }
  };

  return (
    <Container>
      <PageTitle hasPrevButton={false}>보유 카드</PageTitle>
      <FlexColumnBox>
        <DroppableArea cards={cards} dispatch={dispatch} type={TYPES.SET_CARD_ORDER}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {cards.map((cardData, index) => (
                <DraggableCard key={cardData.id} card={cardData} index={index}>
                  <ClickCardBox onClick={() => onClickCard(cardData)}>
                    <Card
                      cardNumber={cardData.cardNumber}
                      cardExpiration={cardData.cardExpiration}
                      cardOwner={cardData.cardOwner}
                      cardName={cardData.cardName}
                      cardColor={cardData.cardColor}
                      isSmall={true}
                    />
                  </ClickCardBox>
                  <DeleteCircleButton onDeleteCard={() => onDeleteCard(cardData.id)} />
                  <Styled.CardNickname>{cardData.cardNickname}</Styled.CardNickname>
                </DraggableCard>
              ))}
              {provided.placeholder}
            </div>
          )}
        </DroppableArea>
        <PointerBox onClick={onClickAnotherCard}>
          <AnotherCard />
        </PointerBox>
      </FlexColumnBox>
      {isConfirmModalOpen && (
        <CardConfirmModal
          cardData={modalCardData}
          onCloseModal={onCloseModal}
          onSubmitForm={onSubmitForm}
        />
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
