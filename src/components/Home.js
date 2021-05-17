import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import Card from "./shared/Card";
import AddCardButton from "./shared/Button/AddCardButton";
import BinarySelectButton from "./shared/Button/BinarySelectButton";

import { getCardList, deleteCardList } from "../APIs";
import { PAGE } from "../constants";
import { CARD_SIZE } from "../constants";

const Home = ({ routeTo }) => {
  const [cardList, setCardList] = useState([]);
  const [cardClickedList, setCardClickedList] = useState({});

  const setCardListByFetch = useCallback(async () => {
    const fetchedCardList = await getCardList();
    
    setCardList(fetchedCardList);
  }, [setCardList]);

  const initCardClickedList = useCallback(() => {
    const clickedList = cardList.reduce((acc, card) => {
      acc[card.id] = false;

      return acc;
    }, {})

    setCardClickedList(clickedList);
  }, [cardList, setCardClickedList]);

  const onBackgroundClick = ({ target, currentTarget }) => {
    const isOuterOfCard = target === currentTarget || target.localName === "li" || target.localName === "ul"

    if (isOuterOfCard) {
      initCardClickedList();
    }
  };

  const onCardItemClick = (currentId) => {
    const clickedList = Object
      .entries(cardClickedList)
      .reduce((acc, [id, clicked]) => {
        if (id === String(currentId)) {
          acc[id] = !clicked;
        } else {
          acc[id] = false;
        }

        return acc;
    }, {});

    setCardClickedList(clickedList);
  };

  const onDeleteButtonClick = async (id) => {
    if (!window.confirm("정말로 카드를 삭제하시겠습니까?")) {
      return;
    }

    const { isSucceeded, message } = await deleteCardList(id);

    if (!isSucceeded) {
      alert(message);

      return;
    }

    setCardListByFetch();
  };

  useEffect(() => {
    setCardListByFetch();
  }, [setCardListByFetch]);

  useEffect(() => {
    initCardClickedList();
  }, [initCardClickedList]);

  return (
    <>
      <div className="card-list" onClick={onBackgroundClick}>
        <ul>
          {cardList.map((card) => (
            <li key={card.cardNumbers.join("")}>
              {cardClickedList[card.id] && 
                <div className="card-list__update-delete-button">
                  <BinarySelectButton 
                    firstOption={{name: "카드별명 수정", handler: () => {} }}
                    secondOption={{name: "삭제", handler: () => onDeleteButtonClick(card.id) }}
                  />
                </div>}
              <Card
                cardType={card.cardType}
                cardNumbers={card.cardNumbers}
                username={card.username}
                expirationDate={`${card.expirationDate.month}/${card.expirationDate.year}`}
                size={CARD_SIZE.SMALL}
                onClick={() => onCardItemClick(card.id)}
              />
              <h3>{card.description}</h3>
            </li>
          ))}
        </ul>
        <AddCardButton onClick={() => routeTo(PAGE.CARD_ADDITION.ID)} />
      </div>
    </>
  );
};

Home.propTypes = {
  routeTo: PropTypes.func.isRequired,
};

export default Home;
