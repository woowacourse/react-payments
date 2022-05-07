import React from 'react';
import CardBasicInfoForm from '../Form/CardBasicInfoForm';
import Card from '../Card/Card';
import { PageContext } from '../../context';
import { PAGE } from '../../constants';
import { useContext } from 'react';
import LeftArrowButton from '../Common/Button/LeftArrowButton';

function AddCardPage() {
  const { setPage, tempRouter } = useContext(PageContext);

  return (
    <main className={tempRouter.addCard}>
      <nav>
        <LeftArrowButton onClick={() => setPage(PAGE.CARD_LIST)} />
        <h2 className="page-title">카드 추가</h2>
      </nav>
      <Card cardBoxSize={'small'}></Card>
      <CardBasicInfoForm />
    </main>
  );
}

export default AddCardPage;
