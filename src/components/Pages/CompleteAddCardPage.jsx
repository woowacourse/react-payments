import React from 'react';
import { useContext } from 'react';
import { PageContext, CardContext } from '../../context';
import CardNickNameForm from '../Form/CardNickNameForm';
import Card from '../Card/Card';
import { CARD_SIZE } from '../../constants';

function CompleteAddCardPage() {
  const { tempRouter } = useContext(PageContext);
  const { cardInput } = useContext(CardContext);

  return (
    <main className={tempRouter.completeAddCard}>
      <h2 className="page-title complete-page-title"> 카드 등록이 완료되었습니다. </h2>
      <Card cardInformation={cardInput} cardBoxSize={CARD_SIZE.BIG}></Card>
      <CardNickNameForm />
    </main>
  );
}

export default CompleteAddCardPage;
