import Button from '../ui/Button.tsx';
import { css } from '@emotion/react';

export default function SubmitButton() {
  return (
    <div css={buttonWrapperStyle}>
      <Button size="lg" rounded={false}>
        확인
      </Button>
    </div>
  );
}

const buttonWrapperStyle = css`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 512px;
`;
