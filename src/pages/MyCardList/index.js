import "./style.css";
import React from "react";
import PropTypes from "prop-types";
import { CARD_SIZE, URL } from "../../constants";
import { Card } from "../../components";
import CardAdditionButton from "../../components/CardAdditionButton";

const MyCardList = (props) => {
  const { cardList } = props;
  console.log(cardList);

  return (
    <>
      <ul className="my-card-list">
        {cardList.map((card) => (
          <li key={card.cardNumbers.join("")}>
            <Card {...card} size={CARD_SIZE.SMALL} />
            <p>{card.cardDescription}</p>
          </li>
        ))}
        <li>
          <CardAdditionButton
            size={CARD_SIZE.SMALL}
            onClick={() => {
              props.routeTo(URL.CARD_ADDITION);
            }}
          />
        </li>
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
