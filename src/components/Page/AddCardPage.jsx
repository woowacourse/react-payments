import React from 'react';
import CardBasicInfoForm from '../Form/CardBasicInfoForm';
import Card from '../Card/Card';
import { PageContext, CardContext } from '../../context';
import { PAGE } from '../../constants';
import { useContext } from 'react';
import LeftArrowButton from '../Common/Button/LeftArrowButton';

function AddCardPage() {
  const { setPage, tempRouter } = useContext(PageContext);
  const { cardInput, cardInputDispatch } = useContext(CardContext);

  return (
    <main className={tempRouter.addCard}>
      <nav>
        <LeftArrowButton onClick={() => setPage(PAGE.CARD_LIST)} />
        <h2 className="page-title">카드 추가</h2>
      </nav>
      <Card cardInformation={cardInput} cardBoxSize={'small'}></Card>
      <CardBasicInfoForm
        cardInput={cardInput}
        cardInputDispatch={cardInputDispatch}
        handleChangePage={() => setPage(PAGE.COMPLETE_ADD_CARD)}
      ></CardBasicInfoForm>
    </main>
  );
}

export default AddCardPage;
