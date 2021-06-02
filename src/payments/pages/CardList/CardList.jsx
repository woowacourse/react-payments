import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import CardShape from "../../components/Card/CardShape";

const CardList = ({ cardInfosList, onAddCardClick }) => (
  <>
    <Header title="보유카드" />
    <div className="flex flex-col items-center space-y-16">
      {cardInfosList.map(({ id, bank, backgroundColor, cardNumbers, expirationDate, ownerName }) => (
        <Card key={id} isRegistered {...{ bank, backgroundColor, cardNumbers, expirationDate, ownerName }} />
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
