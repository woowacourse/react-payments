import styled from '@emotion/styled';
import SingleButton from '../common/SingleButton';
import { useNavigate } from 'react-router-dom';

interface ConfirmButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const ConfirmButton = ({ disabled, children }: ConfirmButtonProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/card-register', { replace: true });
  };

  return (
    <StyledSingleButton
      type='button'
      disabled={disabled}
      onClick={handleOnClick}
    >
      {children}
    </StyledSingleButton>
  );
};

export default ConfirmButton;

const StyledSingleButton = styled(SingleButton)`
  background: #333;
  color: white;
  padding: 16px;
  width: 100%;
  height: 44px;
  margin: 0 auto;
  display: block;
  border-radius: 5px;
  font-family: Noto Sans KR;
  font-weight: 700;
  font-size: 16px;
  line-height: 12px;
  letter-spacing: 0%;
`;
