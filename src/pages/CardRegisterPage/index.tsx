import { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';

import { delayImportComponent } from '../../utils/delayImport';
import CardRegisterLoading from './CardRegisterLoading';
const CardRegisterComplete = lazy(() =>
  delayImportComponent<PageProps>(import('./CardRegisterComplete')),
);

import useCardRegister from './hooks/useCardRegister';
import type { CardData } from '../../types/card';
import type { PageProps } from './types';

import styles from './cardRegisterPage.module.css';

interface Props {
  registerCard: (card: CardData) => void;
}

const CardRegisterPage = ({ registerCard }: Props) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  useCardRegister(registerCard);

  return (
    <>
      <main className={styles.container}>
        <Suspense fallback={<CardRegisterLoading />}>
          <CardRegisterComplete endCallback={navigateHome} />
        </Suspense>
      </main>
    </>
  );
};

export default CardRegisterPage;
