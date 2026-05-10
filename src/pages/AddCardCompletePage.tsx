import { css } from '@emotion/react';
import Check from '../assets/check.tsx';
import Button from '../components/ui/Button.tsx';

export default function AddCardCompletePage() {
  return (
    <div css={layout}>
      <div css={wrapperStyle}>
        <Check />
        <span css={displayTypography}>
          5511로 시작하는
          <br />
          BC카드가 등록되었어요.
        </span>
        <Button>확인</Button>
      </div>
    </div>
  );
}

const layout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 512px;
  height: 100dvh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px 30px 80px 30px;
  overflow: scroll;
`;

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const displayTypography = css`
  font-weight: 700;
  font-size: 25px;
  line-height: 140%;
  text-align: center;
`;
