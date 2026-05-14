import check from '../assets/check.png';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { CARD_ISSUER } from '../constants/constant';
import Button from '../components/common/Button';

function isCardIssuer(cardIssuer: string): cardIssuer is keyof typeof CARD_ISSUER {
  return cardIssuer in CARD_ISSUER;
}

export default function CardRegistrationComplete() {
  const navigate = useNavigate();
  const location = useLocation();

  const state: unknown = location.state;

  if (
    typeof state !== 'object' ||
    state === null ||
    !('cardIssuer' in state) ||
    !('cardNumber' in state)
  ) {
    return <Navigate to="/" replace />;
  }

  const { cardIssuer, cardNumber } = state;

  if (typeof cardIssuer !== 'string' || !isCardIssuer(cardIssuer) || typeof cardNumber !== 'string') {
    return <Navigate to="/" replace />;
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
        {cardNumber}로 시작하는 <br />
        {CARD_ISSUER[cardIssuer]}가 등록되었어요.
      </h1>
      <Button onClick={() => navigate('/')}>확인</Button>
    </div>
  );
}
