import { css } from '@emotion/react';
import Skeleton from '../ui/Skeleton.tsx';

export default function CardItemSkeleton() {
  return (
    <div css={cardItemStyle}>
      <Skeleton style={cardGraphicStyle} />
      <div css={cardInfoStyle}>
        <Skeleton style={cardCompanyStyle} />
        <Skeleton style={cardNumbersStyle} />
        <Skeleton style={expirationPeriodStyle} />
      </div>
    </div>
  );
}

const cardItemStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

const cardInfoStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const cardGraphicStyle = css`
  width: 64px;
  height: 40px;
  border-radius: 4px;
`;

const cardCompanyStyle = css`
  width: 80px;
  height: 14px;
`;

const cardNumbersStyle = css`
  width: 140px;
  height: 10px;
`;

const expirationPeriodStyle = css`
  width: 60px;
  height: 9px;
`;
