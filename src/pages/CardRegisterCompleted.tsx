import { css } from '@emotion/react';
import { CIRCLE_CHECK } from '../assets';
import { useLocation, useNavigate } from 'react-router-dom';

const completedContainerStyle = css({
  width: '100%',
  padding: '188px 28px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
});

const checkImgContainerStyle = css({
  display: 'flex',
  justifyContent: 'center',
});

const messageStyle = css({
  fontSize: '25px',
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: '30px',
});

const buttonStyle = css({
  backgroundColor: '#333333',
  width: '100%',
  height: '44px',
  fontWeight: 'bold',
  fontSize: '15px',
  color: '#FFFFFF',
  padding: '30px auto',
  borderRadius: '5px',
});

function CardRegisterCompleted() {
  const location = useLocation();
  const { cardStartNumber, cardProvider } = location.state;

  const navigate = useNavigate();
  const handlePage = () => {
    navigate('/');
  };

  return (
    <div css={completedContainerStyle}>
      <div css={checkImgContainerStyle}>
        <img src={CIRCLE_CHECK} />
      </div>
      <div css={messageStyle}>
        <p>{cardStartNumber}로 시작하는</p>
        <p>{cardProvider}가 등록되었어요.</p>
      </div>
      <button css={buttonStyle} onClick={() => handlePage()}>
        확인
      </button>
    </div>
  );
}

export default CardRegisterCompleted;
