import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import Card from "./shared/Card";
import AddCardButton from "./shared/Button/AddCardButton";

import { getCardList, deleteCardList } from "../APIs";
import Icofont from "react-icofont";
import { PAGE } from "../constants";
import { CARD_SIZE } from "../constants";

const Home = ({ routeTo }) => {
  const [cardList, setCardList] = useState([]);

  const setCardListByFetch = useCallback(async () => {
    const fetchedCardList = await getCardList();
    
    setCardList(fetchedCardList);
  }, [setCardList]);

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

  return (
    <>
      <div className="card-list">
        <ul>
          {cardList.map((card) => (
            <li key={card.cardNumbers.join("")}>
              <Card
                cardType={card.cardType}
                cardNumbers={card.cardNumbers}
                username={card.username}
                expirationDate={`${card.expirationDate.month}/${card.expirationDate.year}`}
                size={CARD_SIZE.SMALL}
              />
              <h3>{card.description}</h3>
              <button type="button" onClick={() => onDeleteButtonClick(card.id)}>
                <Icofont icon="close-circled" />
              </button>
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
