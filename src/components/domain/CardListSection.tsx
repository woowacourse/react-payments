import { css } from '@emotion/react';
import CardList, { type Card } from './CardList.tsx';
import AddCardButton from './AddCardButton.tsx';

const mockCards: Card[] = [
  {
    cardCompany: '국민카드',
    cardNumbers: ['1111', '1111', '1111', '1111'],
    expirationPeriod: ['11', '11'],
  },
  {
    cardCompany: '국민카드',
    cardNumbers: ['1111', '1111', '1111', '1112'],
    expirationPeriod: ['11', '11'],
  },
  {
    cardCompany: '국민카드',
    cardNumbers: ['1111', '1111', '1111', '1113'],
    expirationPeriod: ['11', '11'],
  },
];

type ResponseStatus = 'idle' | 'loading' | 'success' | 'error';

export default function CardListPage() {
  const cards = mockCards;
  const cardCount = cards.length;
  const responseStatus: ResponseStatus = 'success';

  const isPending = responseStatus === 'idle';
  const isLoading = responseStatus === 'loading';
  const isSuccess = responseStatus === 'success';
  const isEmpty = cards.length === 0;
  const isError = responseStatus === 'error';

  return (
    <div css={layout}>
      <h1 css={headerTypography}>보유 카드 {cardCount > 0 ? ` (${cardCount})` : ''}</h1>
      <div css={contentWrapperStyle}>
        {isPending && <div></div>}
        {isLoading && <div></div>}
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
            <CardList cards={cards} />
            <AddCardButton variant="dashed" size="sm">
              + 카드 추가
            </AddCardButton>
          </div>
        )}
        {isError && <div></div>}
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
