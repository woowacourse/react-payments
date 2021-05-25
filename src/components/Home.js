import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import Card from "./shared/Card";
import AddCardButton from "./shared/Button/AddCardButton";
import BinarySelectButton from "./shared/Button/BinarySelectButton";

import apiRequest from "../apiRequest";
import { MESSAGE, PAGE, CARD_SIZE } from "../constants";

const Home = ({ routeTo }) => {
  const [cardList, setCardList] = useState([]);
  const [optionSelectVisibilities, setOptionSelectVisibilities] = useState({});
  const [cardUpdateInputVisibilities, setCardUpdateInputVisibilities] = useState({});
  const [cardDescriptionInputValue, setCardDescriptionInputValue] = useState("");

  const setCardListByFetch = useCallback(async () => {
    const fetchedCardList = await apiRequest.cardList.get();
    
    setCardList(fetchedCardList);
  }, [setCardList]);

  const getInitialVisibilities = useCallback(() => {
    return cardList.reduce((acc, card) => {
      acc[card.id] = false;

      return acc;
    }, {})
  }, [cardList]);

  const initVisibilities = useCallback(() => {
    const initialVisibilities = getInitialVisibilities();

    setOptionSelectVisibilities(initialVisibilities);
    setCardUpdateInputVisibilities(initialVisibilities);
  }, [getInitialVisibilities])

  const onBackgroundClick = ({ target, currentTarget }) => {
    const isOuterOfCard = target === currentTarget || target.localName === "li" || target.localName === "ul"

    if (isOuterOfCard) {
      initVisibilities();
    }
  };

  const onCardItemClick = (currentId) => {
    setCardUpdateInputVisibilities(getInitialVisibilities);

    const visibilities = 
      Object.entries(optionSelectVisibilities)
        .reduce((acc, [id, isVisible]) => {
          if (id === String(currentId)) {
            acc[id] = !isVisible;
          } else {
            acc[id] = false;
          }

          return acc;
      }, {});

    setOptionSelectVisibilities(visibilities);
  };

  const onUpdateButtonClick = (currentId, currentDescription) => {
    setOptionSelectVisibilities(getInitialVisibilities());

    const visibilities = 
    Object.keys(cardUpdateInputVisibilities)
      .reduce((acc, id) => {
        acc[id] = (id === String(currentId));

        return acc;
    }, {});

    setCardUpdateInputVisibilities(visibilities);
    setCardDescriptionInputValue(currentDescription);
  }

  const onCardDescriptionInputValueChange = ({ target }) => {
    setCardDescriptionInputValue(target.value);
  };

  const onCardDescriptionInputValueSubmit = async (event, id) => {
    event.preventDefault();

    if (!window.confirm(MESSAGE.CONFIRM.PUT_CARD_DESCRIPTION)) {
      return;
    }

    const { isSucceeded, message } = await apiRequest.cardList.putDescription(id, cardDescriptionInputValue);

    if (!isSucceeded) {
      alert(message);

      return;
    }

    setCardListByFetch();
  };

  const onDeleteButtonClick = async (id) => {
    if (!window.confirm(MESSAGE.CONFIRM.DELETE_CARD_LIST)) {
      return;
    }

    const { isSucceeded, message } = await apiRequest.cardList.delete(id);

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
    initVisibilities();
  }, [initVisibilities]);

  return (
    <>
      <div className="card-list" onClick={onBackgroundClick}>
        <ul>
          {cardList.map((card) => (
            <li key={card.cardNumbers.join("")}>
              {optionSelectVisibilities[card.id] && 
                <div className="card-list__update-delete-button">
                  <BinarySelectButton 
                    firstOption={{name: "카드별명 수정", handler: () => onUpdateButtonClick(card.id, card.description) }}
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
              {cardUpdateInputVisibilities[card.id]
                ? <form 
                    className="card-list__update-card-desc"
                    onSubmit={(event) => onCardDescriptionInputValueSubmit(event, card.id)}
                  >
                    <input 
                      type="text"
                      value={cardDescriptionInputValue}
                      onChange={onCardDescriptionInputValueChange}
                    />
                    <button>수정</button>
                  </form>
                : <h3>{card.description}</h3>}
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
