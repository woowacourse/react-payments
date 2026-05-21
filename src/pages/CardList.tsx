import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardListItem from '../components/CardListItem';
import { getCards } from '../api/cards';
import type { CardResponse } from '../types/api';

type FetchState =
  | { status: 'loading' }
  | { status: 'success'; data: CardResponse[] }
  | { status: 'error'; message: string };

function SkeletonBlock({
  width,
  height,
  borderRadius = '3px',
}: {
  width: string;
  height: string;
  borderRadius?: string;
}) {
  return (
    <div
      css={{
        width,
        height,
        borderRadius,
        backgroundColor: '#EDEDED',
      }}
    />
  );
}

function CardListSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <article
          key={index}
          aria-hidden="true"
          data-testid="card-list-skeleton-item"
          css={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            width: '320px',
            height: '73px',
            padding: '12px',
            boxSizing: 'border-box',
            border: '1px solid #E6E6E6',
            borderRadius: '5px',
          }}
        >
          <SkeletonBlock width="64px" height="40px" />
          <div css={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <SkeletonBlock width="80px" height="12px" />
            <SkeletonBlock width="140px" height="9px" />
            <SkeletonBlock width="60px" height="9px" />
          </div>
        </article>
      ))}
      <div
        aria-hidden="true"
        data-testid="card-list-skeleton-action"
        css={{
          width: '320px',
          height: '40px',
          borderRadius: '5px',
          backgroundColor: '#FAFAFA',
          border: '1px dashed #EFEFEF',
          boxSizing: 'border-box',
        }}
      />
    </>
  );
}

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
        보유 카드
      </h1>
      <div css={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {state.status === 'loading' && <CardListSkeleton />}
        {state.status === 'error' && (
          <p css={(theme) => ({ ...theme.typography.caption, color: theme.colors.error, margin: 0 })}>
            {state.message}
          </p>
        )}
        {state.status === 'success' &&
          state.data.map((card) => <CardListItem key={card.id} card={card} />)}
        {state.status !== 'loading' && (
          <button
            type="button"
            onClick={() => navigate('/register')}
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
        )}
      </div>
    </div>
  );
}
