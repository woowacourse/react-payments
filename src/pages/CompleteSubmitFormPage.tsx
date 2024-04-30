import NavigateButton from '../components/common/NavigateButton';
import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';

const CompleteSubmitFormPage = () => {
  const location = useLocation();
  return (
    <div css={completeContainerStyle}>
      <div css={completeBoxStyle}>
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="38" cy="38" r="38" fill="#333333" />
          <path
            d="M23 34.0377L35.0471 48L55 28"
            stroke="white"
            stroke-width="7.49999"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>
          {location.state}로 시작하는
          <br /> BC카드가 등록되었어요.
        </p>
        <NavigateButton path="/" width="320px">
          확인
        </NavigateButton>
      </div>
    </div>
  );
};

const completeContainerStyle = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const completeBoxStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  font-size: 25px;
  font-weight: 700;
  line-height: 36.2px;
  text-align: center;
`;

export default CompleteSubmitFormPage;
