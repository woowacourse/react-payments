import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../../shared/Card';
import ActionSheet from '../../shared/ActionSheet';
import useSnackbar from '../../../hooks/useSnackbar';
import { getCardsRequest, deleteCardRequest } from '../../../request';
import cardSettingImg from '../../../assets/card_setting.png';
import spinnerGif from '../../../assets/spinner.gif';
import * as Style from './style';

const CardList = (props) => {
  const { handleAddCard, handleGoUpdate } = props;

  const [cards, setCards] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [actionSheetOpen, setActionSheetOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState('');
  const { Snackbar, openSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardsData = await getCardsRequest();
        setCards(cardsData);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleupdateCardRequestAlias = (event) => {
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

    try {
      deleteCardRequest(selectedCardId);
      openSnackbar('카드를 삭제했습니다.');
    } catch (error) {
      console.error(error);
    }

    setActionSheetOpen(false);

    try {
      const cardsData = await getCardsRequest();
      setCards(cardsData);
      setLoaded(true);
    } catch (error) {
      openSnackbar('데이터를 로드하는 데 실패했습니다.');
      console.error(error);
    }
  };

  const actionSheetOptions = { 삭제: deleteCard };

  return (
    <>
      <Style.Root>
        <Style.Spinner src={spinnerGif} alt="spinner" isShowing={!isLoaded} />
        {cards.map((card) => (
          <Style.CardWrapper key={card.id} data-card-id={card.id} onClick={handleupdateCardRequestAlias}>
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
        <Style.CardAddButton isShowing={isLoaded} onClick={handleAddCard}>
          +
        </Style.CardAddButton>
      </Style.Root>
      <ActionSheet options={actionSheetOptions} isOpen={actionSheetOpen} setActionSheetOpen={setActionSheetOpen} />
      <Snackbar />
    </>
  );
};

CardList.propTypes = {
  handleAddCard: PropTypes.func.isRequired,
  handleGoUpdate: PropTypes.func.isRequired,
};

export default CardList;
