import { Link } from 'react-router-dom';

import CardRegisterForm from '../../components/CardRegisterForm';
import CardCompanySelectBottomSheet from '../../components/CardCompanySelectBottomSheet';
import { CardCompanyProvider } from '../../domain/context/CardCompanyContext';

import { useModal } from '../../components/common/Modal/ModalContext';

import styles from './cardRegisterPage.module.css';

const CardRegisterPage = () => {
  const { isModalOpen } = useModal();

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
          <h1 className="text-header">카드 추가</h1>
        </header>
        <main className={styles.formContainer}>
          <CardRegisterForm />
        </main>
      </div>
      {isModalOpen && <CardCompanySelectBottomSheet />}
    </CardCompanyProvider>
  );
};

export default CardRegisterPage;
