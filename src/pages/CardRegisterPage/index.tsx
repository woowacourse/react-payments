import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import CardRegisterForm from '../../components/CardRegisterForm';
import CardCompanySelectBottomSheet from '../../components/CardCompanySelectBottomSheet';
import { CardCompanyProvider } from '../../components/CardCompany/CardCompanyContext';

import { useModal } from '../../components/common/Modal/ModalContext';
import { useCardsContext } from '../../domain/context/CardsContext';

import styles from './cardRegisterPage.module.css';

const CardRegisterPage = () => {
  const { isModalOpen, openModal } = useModal();
  const { registerCard } = useCardsContext();

  useEffect(() => {
    openModal();
  }, []);

  return (
    <CardCompanyProvider>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link to="/">
            <svg
              width={10}
              height={17}
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.30425 1L1.36475 8.78658L9.15133 15.7261"
                stroke="#525252"
                strokeWidth={1.5}
              />
            </svg>
          </Link>
          <h1 className="text-title">카드 추가</h1>
        </header>
        <main className={styles.formContainer}>
          <CardRegisterForm registerCard={registerCard} />
        </main>
      </div>
      {isModalOpen && <CardCompanySelectBottomSheet />}
    </CardCompanyProvider>
  );
};

export default CardRegisterPage;
