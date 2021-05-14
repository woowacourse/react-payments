import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../stories/Card";
import SimpleButton from "../stories/SimpleButton";
import { CARD_SIZE } from "../constants";
import { CARD_DESCRIPTION, FORMAT_CHAR } from "../constants";

const CompleteCardAddition = ({ card, onCardAdditionComplete }) => {
  const { cardType, cardNumbers, expirationDate, username } = card;
  const [cardDescription, setCardDescription] = useState("");

  const onCardDescriptionChange = ({ target }) => {
    setCardDescription(target.value);
  };

  const onDescriptionSubmit = (event) => {
    event.preventDefault();

    const completedCard = {
      description: cardDescription,
      ...card,
    };

    onCardAdditionComplete(completedCard);
  };

  return (
    <div className="complete-card-addition">
      <h2>카드등록이 완료되었습니다.</h2>
      <Card
        cardType={cardType}
        cardNumbers={cardNumbers}
        username={username}
        expirationDate={Object.values(expirationDate).join(
          FORMAT_CHAR.EXPIRATION_DATE_SEPARATOR
        )}
        size={CARD_SIZE.LARGE}
      />
      <form onSubmit={onDescriptionSubmit}>
        <input
          value={cardDescription}
          onChange={onCardDescriptionChange}
          type="text"
          minLength={CARD_DESCRIPTION.MIN_LENGTH}
          maxLength={CARD_DESCRIPTION.MAX_LENGTH}
          placeholder="카드 별명을 입력해주세요"
          required
        />
        <SimpleButton innerText="확인" />
      </form>
    </div>
  );
};

CompleteCardAddition.propTypes = {
  onCardAdditionComplete: PropTypes.func.isRequired,
  card: PropTypes.shape({
    cardType: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    cardNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
    expirationDate: PropTypes.shape({
      month: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
    username: PropTypes.string.isRequired,
    secureCode: PropTypes.string.isRequired,
    password: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CompleteCardAddition;
