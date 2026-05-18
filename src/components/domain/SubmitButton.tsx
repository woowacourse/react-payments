import Button from '../ui/Button.tsx';
import { css } from '@emotion/react';

interface SubmitButtonProps {
  disabled?: boolean;
  loading?: boolean;
}

export default function SubmitButton({ disabled = false, loading = false }: SubmitButtonProps) {
  return (
    <div css={buttonWrapperStyle}>
      <Button type="submit" disabled={disabled || loading} loading={loading} size="lg" rounded={false}>
        확인
      </Button>
    </div>
  );
}

const buttonWrapperStyle = css`
  position: fixed;
  z-index: 1;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 512px;
`;
