import React from 'react';
import { useContext } from 'react';
import { PageContext, CardContext } from '../../context';
import CardNameInfoForm from '../Form/CardNameInfoForm';
import Card from '../Card/Card';

function CompleteAddCardPage() {
  const { tempRouter } = useContext(PageContext);
  const { cardInput } = useContext(CardContext);

  return (
    <main className={tempRouter.completeAddCard}>
      <h2 className="page-title complete-page-title"> 카드 등록이 완료되었습니다. </h2>
      <Card cardInformation={cardInput} cardBoxSize={'big'}></Card>
      <CardNameInfoForm />
    </main>
  );
}

export default CompleteAddCardPage;
