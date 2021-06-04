import "./style.css";
import React, { useState } from "react";
import { CARD_SIZE } from "../../constants";
import PropTypes from "prop-types";
import { Card, Button } from "../../components";
import { CARD_DESCRIPTION, URL } from "../../constants";
import { Redirect } from "react-router";

const CompleteCardAddition = (props) => {
  const [cardDescription, setCardDescription] = useState("");

  if (!props.card) {
    alert("예상치 못한 오류가 발생했습니다.");
    return <Redirect to={URL.HOME} />;
  }

  const {
    cardId,
    cardType,
    cardNumbers,
    expirationDate,
    username,
  } = props.card;

  const onCardDescriptionChange = ({ target }) => {
    setCardDescription(target.value);
  };

  const onDescriptionSubmit = (event) => {
    event.preventDefault();

    props.onCardAdditionComplete(cardId, cardDescription);
  };

  return (
    <div className="complete-card-addition">
      <h2>카드등록이 완료되었습니다.</h2>
      <Card
        cardType={cardType}
        cardNumbers={cardNumbers}
        username={username}
        expirationDate={expirationDate}
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
        <Button innerText="확인" />
      </form>
    </div>
  );
};

CompleteCardAddition.propTypes = {
  onCardAdditionComplete: PropTypes.func.isRequired,
  card: PropTypes.shape({
    cardType: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    cardNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
    expirationDate: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    secureCode: PropTypes.string.isRequired,
    password: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default CompleteCardAddition;
