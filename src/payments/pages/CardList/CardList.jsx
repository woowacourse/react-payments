import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import CardShape from "../../components/Card/CardShape";

const CardList = ({ cardInfos, onAddCardClick }) => (
  <>
    <Header title="보유카드" />
    <div className="flex flex-col items-center">
      {cardInfos.map(({ id, bank, backgroundColor, cardNumbers, expirationDate, ownerName, nickname }) => (
        <React.Fragment key={id}>
          <Card isRegistered {...{ bank, backgroundColor, cardNumbers, expirationDate, ownerName }} />
          <p className="mb-6 mt-3 text-sm font-medium">{nickname}</p>
        </React.Fragment>
      ))}
      <CardShape onClick={onAddCardClick} />
    </div>
  </>
);

CardList.propTypes = {
  cardInfos: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)).isRequired,
  onAddCardClick: PropTypes.func.isRequired,
};

export default CardList;
