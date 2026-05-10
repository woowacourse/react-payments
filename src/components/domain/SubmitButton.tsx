import Button from '../ui/Button.tsx';
import { css } from '@emotion/react';

interface SubmitButtonProps {
  disabled?: boolean;
}

export default function SubmitButton({ disabled = false }: SubmitButtonProps) {
  return (
    <div css={buttonWrapperStyle}>
      <Button disabled={disabled} size="lg" rounded={false}>
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
