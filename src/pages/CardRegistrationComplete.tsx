import check from '../assets/check.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { CARD_ISSUER } from '../constants/constant';
import type { CardIssuerType } from '../types/cardStausTypes';

export default function CardRegistrationComplete() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as { cardIssuer: CardIssuerType; cardNumber: string } | null;

  if (!state) {
    navigate('/');
  }

  return (
    <div
      css={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
        width: '376px',
        height: '100vh',
        margin: '0 auto',
        padding: ' 0 28px',
      })}
    >
      <img src={check} alt="카드 등록 완료" width={76} height={76} />
      <h1
        css={(theme) => ({
          color: theme.colors.completeText,
          textAlign: 'center',
          ...theme.typography.mode,
          fontSize: '25px',
          lineHeight: '35px',
        })}
      >
        {state.cardNumber}로 시작하는 <br />
        {CARD_ISSUER[state.cardIssuer]}가 등록되었어요.
      </h1>
      <button
        onClick={() => navigate('/')}
        css={(theme) => ({
          backgroundColor: theme.colors.cardBackground,
          width: '100%',
          height: '44px',
          borderRadius: '5px',
        })}
      >
        <span
          css={(theme) => ({
            ...theme.typography.mode,
            color: theme.colors.white,
            textAlign: 'center',
          })}
        >
          확인
        </span>
      </button>
    </div>
  );
}
