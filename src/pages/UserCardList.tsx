import { useState, useEffect } from 'react';
import type { CardResponse } from '../types/cardStausTypes';
import ErrorInfo from '../components/userCard/ErrorInfo';
import { requestCards } from '../api/requestCards';
import Skeleton from '../components/skeleton/Skeleton';
import Empty from '../components/userCard/Empty';

export default function UserCardList() {
  const [cards, setCards] = useState<CardResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRetry = async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');

      const data = await requestCards();
      setCards(data);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }

      setErrorMessage('카드 목록을 불러올 수 없어요');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    requestCards(abortController.signal)
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          return;
        }
        setErrorMessage('카드 목록을 불러올 수 없어요');
      })
      .finally(() => {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div
      css={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colors.white,
        width: '376px',
        height: '100vh',
        margin: '0 auto',
        padding: '40px 28px',
      })}
    >
      <p
        css={(theme) => ({
          ...theme.typography.title,
          color: theme.colors.completeText,
        })}
      >
        보유 카드
      </p>
      {!errorMessage && (
        <>
          {isLoading && <Skeleton />}
          {!isLoading && cards.length === 0 && <Empty />}
        </>
      )}
      {errorMessage && <ErrorInfo message={errorMessage} handleRetry={handleRetry} />}
    </div>
  );
}
