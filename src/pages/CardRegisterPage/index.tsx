import CardRegisterForm from '../../components/CardRegisterForm';

import type { CardInfo } from '../../types/card';

import styles from './cardRegisterPage.module.css';
import Header from '../../components/common/Header';
import CardCompanyModal from '../../components/CardCompanyModal';
import { useState } from 'react';

interface Props {
  registerCard: (card: CardInfo) => void;
}

const CardRegisterPage = ({ registerCard }: Props) => {
  const [toggleModal, setToggleModal] = useState(true);

  const onCloseModal = () => {
    setToggleModal(false);
  };

  return (
    <>
      <Header title="카드 추가" previousButton />
      <main className={styles.formContainer}>
        <CardRegisterForm registerCard={registerCard} />
      </main>
      {toggleModal && <CardCompanyModal onClose={onCloseModal} />}
    </>
  );
};

export default CardRegisterPage;
