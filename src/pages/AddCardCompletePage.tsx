import Button from '../components/ui/Button';
import CheckIcon from '../components/ui/CheckIcon';
import { css } from '@emotion/react';
import { useLocation, Navigate, useNavigate } from 'react-router';

interface LocationState {
  firstFourDigits: string;
  cardCompany: string;
}

export default function AddCardCompletePage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (
    !state ||
    typeof (state as LocationState).firstFourDigits !== 'string' ||
    typeof (state as LocationState).cardCompany !== 'string'
  )
    return <Navigate to="/" replace />;

  const { firstFourDigits, cardCompany } = state as LocationState;

  const handleConfirm = () => navigate('/');

  return (
    <main css={mainStyle}>
      <div css={contentStyle}>
        <CheckIcon />
        <p css={completeMessageStyle}>
          {firstFourDigits}로 시작하는
          <br />
          {cardCompany}가 등록되었어요.
        </p>
        <Button onClick={handleConfirm}>확인</Button>
      </div>
    </main>
  );
}

const mainStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const contentStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const completeMessageStyle = css`
  font-size: 25px;
  font-weight: bold;
  color: var(--color-text-default);
  text-align: center;
  padding: 16px 32px;
`;
