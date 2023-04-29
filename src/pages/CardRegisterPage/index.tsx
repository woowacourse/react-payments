import Header from '../../components/common/Header';
import CardItem from '../../components/CardItem';
import CardRegisterForm from '../../components/CardRegisterForm';
import CardCompanyModal from '../../components/CardCompanyModal';

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
      <main className={styles.main}>
        <section className={styles.cardSection}>
          <CardItem />
          <button
            type="button"
            className={styles.companySelectButton}
            onClick={openModal}
          >
            카드사 설정하기
          </button>
        </section>
        <section className={styles.formSection}>
          <CardRegisterForm registerCard={registerCard} />
        </section>
        {toggleModal && <CardCompanyModal onClose={closeModal} />}
      </main>
    </>
  );
};

export default CardRegisterPage;
