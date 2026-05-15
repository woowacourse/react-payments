import { css } from '@emotion/react';

type ResponseStatus = 'idle' | 'loading' | 'success' | 'error';

export default function CardListPage() {
  const cardCount = 0;
  const responseStatus: ResponseStatus = 'idle';

  const isPending = responseStatus === 'idle';
  const isLoading = responseStatus === 'loading';
  const isSuccess = responseStatus === 'success';
  const isEmpty = false;
  const isError = responseStatus === 'error';

  return (
    <div css={layout}>
      <h1 css={headerTypography}>보유 카드 {cardCount > 0 ? ` (${cardCount}0` : ''}</h1>
      <div css={contentWrapperStyle}>
        {isPending && <div></div>}
        {isLoading && <div></div>}
        {isSuccess && isEmpty && <div></div>}
        {isSuccess && !isEmpty && <div></div>}
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
  justify-content: center;
  align-items: center;
`;
