import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Card from "../Card/Card";
import CardShape from "../Card/CardShape";

const CardList = ({ cardInfosList, onAddCardClick }) => (
  <>
    <Header title="보유카드" />
    <div className="flex flex-col items-center space-y-16">
      {cardInfosList.map(({ id, backgroundColor, bank, numberInfos, ownerName, expirationDate }) => (
        <Card key={id} isRegistered {...{ backgroundColor, bank, numberInfos, ownerName, expirationDate }} />
      ))}
      <CardShape onClick={onAddCardClick} />
    </div>
  </>
);

CardList.propTypes = {
  cardInfosList: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)).isRequired,
  onAddCardClick: PropTypes.func.isRequired,
};

export default CardList;
