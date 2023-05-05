import { useEffect } from 'react';

import Header from '../../components/common/Header';
import CardItem from '../../components/CardItem';
import Button from '../../components/common/Button';
import CardInfoForm from '../../components/CardInfoForm';
import CardCompanyModal from '../../components/CardCompanyModal';

import useModal from '../../hooks/useModal';

import styles from './cardRegisterPage.module.css';

const CardInfoRegisterPage = () => {
  const { toggleModal, openModal, closeModal } = useModal();

  useEffect(() => {
    openModal();
  }, []);

  return (
    <>
      <Header title="카드 추가" previousButton />
      <main className={styles.main}>
        <section className={styles.cardSection}>
          <CardItem />
          <div className={styles.companySelectButton}>
            <Button type="button" onClick={openModal} padding>
              카드사 설정하기
            </Button>
          </div>
        </section>
        <section className={styles.formSection}>
          <CardInfoForm />
        </section>
        {toggleModal && <CardCompanyModal onClose={closeModal} />}
      </main>
    </>
  );
};

export default CardInfoRegisterPage;
