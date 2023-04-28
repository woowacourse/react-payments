import Header from '../../components/common/Header';
import CardItem from '../../components/CardItem';
import CardRegisterForm from '../../components/CardRegisterForm';
import CardCompanyModal from '../../components/CardCompanyModal';

import CardFormProvider from '../../contexts/CardFormContext';
import useModal from '../../hooks/useModal';
import type { CardData } from '../../types/card';

import styles from './cardRegisterPage.module.css';

interface Props {
  registerCard: (card: CardData) => void;
}

const CardRegisterPage = ({ registerCard }: Props) => {
  const { toggleModal, openModal, closeModal } = useModal();

  return (
    <>
      <Header title="카드 추가" previousButton />
      <main className={styles.formContainer}>
        <CardFormProvider>
          <CardItem />
          <button type="button" onClick={openModal}>
            카드사 설정하기
          </button>
          <CardRegisterForm registerCard={registerCard} />
          {toggleModal && <CardCompanyModal onClose={closeModal} />}
        </CardFormProvider>
      </main>
    </>
  );
};

export default CardRegisterPage;
