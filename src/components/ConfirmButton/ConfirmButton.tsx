import styled from '@emotion/styled';
import SingleButton from '../common/SingleButton';

interface SubmitButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const SubmitButton = ({ disabled, children }: SubmitButtonProps) => {
  return (
    <StyledSingleButton type='submit' disabled={disabled}>
      {children}
    </StyledSingleButton>
  );
};

export default SubmitButton;

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
