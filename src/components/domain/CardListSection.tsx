import { css } from '@emotion/react';
import CardList from './CardList.tsx';
import AddCardButton from './AddCardButton.tsx';
import Error from '../../assets/error.tsx';
import Button from '../ui/Button.tsx';
import CardItemSkeleton from './CardItem.skeleton.tsx';
import { useEffect, useState } from 'react';
import ButtonSkeleton from '../ui/Button.skeleton.tsx';
import { getCards } from '../../apis/cards/api.ts';
import type { CardList as CardListType } from '../../apis/cards/type.ts';
import type { ResponseStatus } from '../../types.ts';

export default function CardListSection() {
  const [cards, setCards] = useState<CardListType>([]);
  const [responseStatus, setResponseStatus] = useState<ResponseStatus>('idle');
  const cardCount = cards.length;

  const isPending = responseStatus === 'idle';
  const isLoading = responseStatus === 'loading';
  const isSuccess = responseStatus === 'success';
  const isEmpty = cards.length === 0;
  const isError = responseStatus === 'error';

  useEffect(() => {
    const fetchData = async () => {
      setResponseStatus('loading');

      try {
        const response = await getCards();
        setCards(response);
        setResponseStatus('success');
      } catch {
        setResponseStatus('error');
      }
    };

    fetchData();
  }, []);

  const handleDelete = (cardId: string) => {
    setCards((prev) => prev.filter((card) => card.id !== cardId));
  };

  return (
    <div css={layout}>
      <h1 css={headerTypography}>보유 카드 {cardCount > 0 ? ` (${cardCount})` : ''}</h1>
      <div css={contentWrapperStyle}>
        {(isPending || isLoading) && (
          <div css={loadingWrapperStyle}>
            <CardItemSkeleton />
            <CardItemSkeleton />
            <CardItemSkeleton />
            <ButtonSkeleton />
          </div>
        )}
        {isSuccess && isEmpty && (
          <div css={emptyWrapperStyle}>
            <div css={emptyCardStyle} />
            <span css={errorMessageTypography}>등록된 카드가 없습니다</span>
            <span css={errorCaptionTypography}>아래 버튼을 눌러 첫 카드를 등록해보세요</span>
            <AddCardButton variant="solid" size="md">
              카드 추가하기
            </AddCardButton>
          </div>
        )}
        {isSuccess && !isEmpty && (
          <div css={successWrapperStyle}>
            <CardList cards={cards} onDelete={handleDelete} />
            <AddCardButton variant="dashed" size="sm">
              + 카드 추가
            </AddCardButton>
          </div>
        )}
        {isError && (
          <div css={errorWrapperStyle}>
            <Error />
            <span css={errorMessageTypography}>카드 목록을 불러올 수 없어요</span>
            <span css={errorCaptionTypography}>잠시 후 다시 시도해 주세요.</span>
            <Button variant="solid" size="md">
              다시 시도
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

const layout = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 512px;
  height: 100dvh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 40px 28px 100px 28px;
  overflow: auto;
`;

const headerTypography = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
`;

const contentWrapperStyle = css`
  display: flex;
  height: 100%;
`;

const loadingWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

const emptyWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
  margin: auto;
`;

const successWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const errorWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 100%;
  margin: auto;
`;

const emptyCardStyle = css`
  width: 160px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const errorMessageTypography = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
`;

const errorCaptionTypography = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #8c8c8c;
`;
