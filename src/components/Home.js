import React from "react";
import PropTypes from "prop-types";
import { PAGE } from "../constants";
import Card from "../stories/Card";
import { CARD_SIZE } from "../stories/constants/card";
import AddCardButton from "../stories/AddCardButton";

const Home = (props) => {
  const { routeTo, cardList } = props;

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
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
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
      passwords: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string,
    })
  ),
};

export default Home;
