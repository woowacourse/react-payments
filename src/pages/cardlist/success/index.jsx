import React from 'react';
import PageTemplate from '../../../components/commons/PageTemplate';
import Card from '../../../components/card/Card';
import AliasInputForm from '../../../components/form/InputForm/AliasInputForm';
import PropTypes from 'prop-types';

function CardSuccess({ cardListDispatch, getCard, routeState: { cardId } }) {
  const card = getCard(cardId);

  return (
    <PageTemplate>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card cardInformation={card} />
      <AliasInputForm card={card} cardListDispatch={cardListDispatch} />
    </PageTemplate>
  );
}

CardSuccess.propTypes = {
  cardListDispatch: PropTypes.func,
  getCard: PropTypes.func,
  routeState: PropTypes.object,
};
export default CardSuccess;
