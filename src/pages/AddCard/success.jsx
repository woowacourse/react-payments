import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Page from '..';
import Card from '../../components/card/Card';
import NotFound from '../../components/commons/NotFound';
import AliasInputForm from '../../components/form/InputForm/AliasInputForm';
import PropTypes from 'prop-types';
import { CARD_DEFINITION } from '../../components/types';

function AddCardSuccess({ cardList, cardListDispatch }) {
  const {
    state: { cardId },
  } = useLocation();

  const currentCard = cardList.find(({ id }) => id === cardId);

  return (
    <Page>
      {currentCard ? (
        <>
          <div className="flex-center">
            <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
          </div>
          <Card cardInformation={currentCard} />
          <AliasInputForm cardId={currentCard.id} cardListDispatch={cardListDispatch} />
        </>
      ) : (
        <NotFound />
      )}
    </Page>
  );
}

AddCardSuccess.propTypes = {
  cardList: PropTypes.arrayOf(CARD_DEFINITION),
  cardListDispatch: PropTypes.func,
};
export default AddCardSuccess;
