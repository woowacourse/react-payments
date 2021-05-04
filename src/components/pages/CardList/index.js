import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../../shared/Card';
import ActionSheet from '../../shared/ActionSheet';
import { firestore } from '../../../firebase';
import cardSettingImg from '../../../assets/card_setting.png';
import * as Style from './style';

const CardList = (props) => {
  const [cards, setCards] = useState([]);
  const [actionSheetOpen, setActionSheetOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState('');
  const { handleAddCard, handleGoUpdate } = props;

  let cardsData = [];
  const fetchData = async () => {
    const snapshot = await firestore.collection('cards').get();
    snapshot.forEach((doc) => cardsData.push({ id: doc.id, data: doc.data() }));
    setCards(cardsData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateCardAlias = (event) => {
    const cardId = event.currentTarget.dataset.cardId;

    handleGoUpdate(cardId);
  };

  const handleClickSetting = (event) => {
    event.stopPropagation();

    setSelectedCardId(event.target.parentNode.dataset.cardId);
    setActionSheetOpen(true);
  };

  const deleteCard = async () => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    firestore
      .collection('cards')
      .doc(selectedCardId)
      .delete()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });

    setActionSheetOpen(false);
    await fetchData();
  };

  const actionSheetOptions = { 삭제: deleteCard };

  return (
    <>
      <Style.Root>
        {cards.map((card) => (
          <Style.CardWrapper key={card.id} data-card-id={card.id} onClick={handleUpdateCardAlias}>
            <Card
              width="208px"
              height="130px"
              bankId={card.data.bankId}
              cardNumbers={card.data.cardNumbers}
              ownerName={card.data.ownerName}
              expirationDate={card.data.expirationDate}
            />
            <Style.SettingButton src={cardSettingImg} onClick={handleClickSetting} />
            <Style.CardAlias>{card.data.cardAlias}</Style.CardAlias>
          </Style.CardWrapper>
        ))}
        <Style.CardAddButton onClick={handleAddCard}>+</Style.CardAddButton>
      </Style.Root>
      <ActionSheet options={actionSheetOptions} isOpen={actionSheetOpen} setActionSheetOpen={setActionSheetOpen} />
    </>
  );
};

CardList.propTypes = {
  handleAddCard: PropTypes.func.isRequired,
  handleGoUpdate: PropTypes.func.isRequired,
};

export default CardList;
