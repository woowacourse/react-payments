import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

interface NavigateButtonType {
  path: string;
  children: string;
  width: string;
  sendData?: string;
}

const NavigateButton = ({ path, children, width, sendData }: NavigateButtonType) => {
  const navigate = useNavigate();
  return (
    <button
      css={navigateButtonStyle(width)}
      onClick={() => {
        navigate(path, { state: sendData });
      }}
    >
      {children}
    </button>
  );
};

const navigateButtonStyle = (width: string) => css`
  width: ${width};
  height: 52px;
  border: none;

  background-color: #333333;
  color: #f3f3f3;

  font-size: 16px;
  font-weight: 700;
  line-height: 12px;
`;

export default NavigateButton;
