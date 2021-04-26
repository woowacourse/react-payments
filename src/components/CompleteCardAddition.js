import React from "react";
import PropTypes from "prop-types";

import Card from "../stories/Card";
import Button from "../stories/Button";
import { CARD_SIZE } from "../stories/constants/card";

function CompleteCardAddition(props) {
  const {
    cardType,
    cardNumbers,
    expirationDate,
    username,
    secureCode,
    password,
  } = props.card;

  return (
    <div className="complete-card-addition">
      <h2>카드등록이 완료되었습니다.</h2>
      {/* TODO: props 네이밍 통일 */}
      <Card
        cardType={cardType}
        numbers={cardNumbers}
        userName={username}
        expirationDate={Object.values(expirationDate).join("/")}
        size={CARD_SIZE.LARGE}
      />
      <form>
        <input type="text" placeholder="카드 별명을 입력해주세요" />
        <Button innerText="확인" />
      </form>
    </div>
  );
}

CompleteCardAddition.propTypes = {
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
  }),
};

export default CompleteCardAddition;
