import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import registerCheck from '../assets/RegisterCheck.png';
import { CARD_COMPANY_LABEL } from '../constants/cardCompanies';
import type { RegisteredCard } from './RegisterCard';

type RegisterCompleteLocationState = RegisteredCard | null;

export default function RegisterComplete() {
  const navigate = useNavigate();
  const location = useLocation();
  const registeredCard = location.state as RegisterCompleteLocationState;

  if (!registeredCard) {
    return <Navigate to="/" replace />;
  }

  return (
    <div
      css={(theme) => ({
        width: '376px',
        margin: '0 auto',
        paddingTop: '18px',
        backgroundColor: theme.colors.white,
        color: theme.colors.black,
      })}
    >
      <section
        css={(theme) => ({
          height: '100vh',
          padding: '0 28px',
          backgroundColor: theme.colors.white,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <img src={registerCheck} alt="registerCheck" width={76} height={76} />
        <p
          css={(theme) => ({
            ...theme.typography.registerCompleteMessage,
            width: '338px',
            height: '100px',
            margin: '25px 0',
            color: theme.colors.registerCompleteMessage,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          })}
        >
          {registeredCard.cardNumberPrefix}로 시작하는
          <br />
          {CARD_COMPANY_LABEL[registeredCard.cardCompany]}가 등록되었어요.
        </p>
        <button
          type="button"
          onClick={() => navigate('/cards', { replace: true })}
          css={(theme) => ({
            width: '100%',
            height: '44px',
            borderRadius: '4px',
            backgroundColor: theme.colors.registerCompleteButton,
            color: theme.colors.white,
            ...theme.typography.registerCompleteButton,
          })}
        >
          확인
        </button>
      </section>
    </div>
  );
}
