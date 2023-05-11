import { useEffect } from 'react';
import Modal, { useModal } from 'react-modal-hp';

import Header from '../../components/common/Header';
import CardItem from '../../components/CardItem';
import Button from '../../components/common/Button';
import CardInfoForm from '../../components/CardInfoForm';
import CardCompanyModal from '../../components/CardCompanyModal';

import styles from './cardRegisterPage.module.css';

const portal = document.getElementById('modal-root') as HTMLDivElement;

const CardInfoRegisterPage = () => {
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    openModal();
  }, [openModal]);

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
        <Modal
          open={isOpen}
          onClose={closeModal}
          position="bottom"
          portal={portal}
          animation
        >
          <CardCompanyModal />
        </Modal>
      </main>
    </>
  );
};

export default CardInfoRegisterPage;
