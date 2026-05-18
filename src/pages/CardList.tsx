import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardListItem from '../components/CardListItem';
import { getCards } from '../api/cards';
import type { CardResponse } from '../types/api';

type FetchState =
  | { status: 'loading' }
  | { status: 'success'; data: CardResponse[] }
  | { status: 'error'; message: string };

export default function CardList() {
  const navigate = useNavigate();
  const [state, setState] = useState<FetchState>({ status: 'loading' });

  useEffect(() => {
    getCards()
      .then((data) => setState({ status: 'success', data }))
      .catch((e: Error) => setState({ status: 'error', message: e.message }));
  }, []);

  return (
    <div
      css={(theme) => ({
        position: 'relative',
        backgroundColor: theme.colors.white,
        width: '376px',
        height: '100vh',
        margin: '0 auto',
        boxSizing: 'border-box',
        padding: '24px 28px',
        overflowY: 'auto',
      })}
    >
      <h1
        css={(theme) => ({
          ...theme.typography.title,
          margin: '0 0 16px 0',
        })}
      >
        보유 카드 ({state.status === 'success' ? state.data.length : 0})
      </h1>
      <div css={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {state.status === 'loading' && (
          <p css={(theme) => ({ ...theme.typography.caption, color: theme.colors.description, margin: 0 })}>
            불러오는 중...
          </p>
        )}
        {state.status === 'error' && (
          <p css={(theme) => ({ ...theme.typography.caption, color: theme.colors.error, margin: 0 })}>
            {state.message}
          </p>
        )}
        {state.status === 'success' &&
          state.data.map((card) => <CardListItem key={card.id} card={card} />)}
        <button
          type="button"
          onClick={() => navigate('/')}
          css={(theme) => ({
            width: '320px',
            height: '40px',
            border: `1px dashed ${theme.colors.inactiveBorder}`,
            borderRadius: '5px',
            backgroundColor: 'transparent',
            color: theme.colors.description,
            ...theme.typography.label,
            cursor: 'pointer',
          })}
        >
          + 카드 추가
        </button>
      </div>
    </div>
  );
}
