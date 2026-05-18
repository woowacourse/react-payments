import { css } from '@emotion/react';
import { useState, Suspense } from 'react';
import ErrorBoundary from '../components/common/ErrorBoundary';
import CardList from '../components/ui/CardList';
import SkeletonList from '../components/ui/CardList/SkeletonList';
import ErrorList from '../components/ui/CardList/ErrorList';
import { getCardList } from '../hooks/useCardListData';

export default function CardListPage() {
  const [cardsPromise, setCardsPromise] = useState(getCardList);
  const [cardCount, setCardCount] = useState(0);

  const handleRetryFetch = () => setCardsPromise(getCardList());

  return (
    <>
      <header css={headerStyle}>
        <h1 css={titleStyle}>보유 카드{cardCount > 0 ? ` (${cardCount})` : ''}</h1>
      </header>
      <main css={mainStyle}>
        <ErrorBoundary fallback={<ErrorList onRetryFetch={handleRetryFetch} />}>
          <Suspense fallback={<SkeletonList />}>
            <CardList cardsPromise={cardsPromise} onCountChange={(count) => setCardCount(count)} />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
}

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 28px 16px 28px;
`;

const titleStyle = css`
  font-size: 18px;
  font-weight: bold;
`;

const mainStyle = css`
  flex: 1;
  overflow-y: auto;
  padding: 0 30px 20px;
`;
