import "./index.css";
import React from "react";
import PropTypes from "prop-types";
import { CARD_SIZE, URL } from "../../constants";
import { Card } from "../../components";

const MyCardList = (props) => {
  const { cardList } = props;
  console.log(cardList);

  return (
    <>
      <div>
        <p>준비중입니다. - home</p>
        <button
          onClick={() => {
            props.routeTo(URL.CARD_ADDITION);
          }}
        >
          카드 추가 하러 가기
        </button>
      </div>
      <ul>
        {cardList.map((card) => (
          <li key={card.cardNumbers.join("")}>
            <Card {...card} size={CARD_SIZE.SMALL} />
          </li>
        ))}
      </ul>
    </>
  );
};

MyCardList.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      cardType: PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }),
      cardNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
      expirationDate: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      secureCode: PropTypes.string.isRequired,
      password: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  ),
};

export default MyCardList;
