import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../stories/Card";
import Button from "../stories/Button";
import { CARD_SIZE } from "../stories/constants/card";

function CompleteCardAddition(props) {
  const { cardType, cardNumbers, expirationDate, username } = props.card;
  const [cardDescription, setCardDescription] = useState("");

  const onCardDescriptionChange = ({ target }) => {
    setCardDescription(target.value);
  };

  const onDescriptionSubmit = (event) => {
    event.preventDefault();

    const card = {
      cardDescription,
      ...props.card,
    };

    props.onCardAdditionComplete(card);
  };

  return (
    <div className="complete-card-addition">
      <h2>카드등록이 완료되었습니다.</h2>
      <Card
        cardType={cardType}
        cardNumbers={cardNumbers}
        username={username}
        expirationDate={Object.values(expirationDate).join("/")}
        size={CARD_SIZE.LARGE}
      />
      <form onSubmit={onDescriptionSubmit}>
        <input
          value={cardDescription}
          onChange={onCardDescriptionChange}
          type="text"
          minLength="1"
          maxLength="30"
          placeholder="카드 별명을 입력해주세요"
          required
        />
        <Button innerText="확인"/>
      </form>
    </div>
  );
}

CompleteCardAddition.propTypes = {
  onCardAdditionComplete: PropTypes.func.isRequired,
  card: PropTypes.shape({
    cardType: PropTypes.shape({
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
