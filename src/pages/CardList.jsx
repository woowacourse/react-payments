import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TYPES } from 'store/card/types';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import PageTitle from 'components/PageTitle/PageTitle';
import AnotherCard from 'components/AnotherCard/AnotherCard';
import Card from 'components/Card/Card';
import FlexColumnBox from 'components/FlexColumnBox/FlexColumnBox';
import Container from 'components/Container/Container';
import PointerBox from 'components/PointerBox/PointerBox';
import DroppableArea from 'common/DragDrop/DroppableArea';
import DraggableCard from 'common/DragDrop/DraggableCard';
import CardConfirmModal from 'containers/CardConfirmModal/CardConfirmModal';
import ClickCardBox from 'common/ClickCardBox';
import CardManageModal from 'containers/CardManageModal/CardManageModal';

export default function CardList() {
  const navigate = useNavigate();
  const { cards } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);
  const [modalCardData, setModalCardData] = useState();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  const onClickCard = (cardData) => {
    setModalCardData(cardData);
    setIsManageModalOpen(true);
  };

  const onClickAnotherCard = () => {
    navigate('/add-card');
  };

  const onSubmitForm = (cardData) => (event, nickname) => {
    event.preventDefault();

    const id = cardData.id;
    dispatch({ type: TYPES.UPDATE_NICKNAME, nickname, id });

    setIsConfirmModalOpen(false);
    navigate('/card-list');
  };

  const onDeleteCard = (id) => {
    if (id && confirm('등록된 카드를 삭제하시겠습니까?')) {
      dispatch({ type: TYPES.DELETE_CARD, id });
      setIsManageModalOpen(false);
    }
  };

  const onClickEditNickname = () => {
    setIsConfirmModalOpen(true);
    setIsManageModalOpen(false);
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
          onCloseModal={() => setIsConfirmModalOpen(false)}
          onSubmitForm={onSubmitForm}
        />
      )}
      {isManageModalOpen && (
        <CardManageModal
          onCloseModal={() => setIsManageModalOpen(false)}
          onDeleteCard={() => onDeleteCard(modalCardData.id ?? null)}
          cardData={modalCardData}
          onClickEditNickname={onClickEditNickname}
        />
      )}
    </Container>
  );
}

const Styled = {
  CardNickname: styled.span`
    font-size: 19px;
  `,
};
