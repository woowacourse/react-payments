import styled from '@emotion/styled';
import SingleButton from '../common/SingleButton';

interface SubmitButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const SubmitButton = ({ disabled, children }: SubmitButtonProps) => {
  return (
    <Wrapper>
      <StyledSingleButton type='submit' disabled={disabled}>
        {children}
      </StyledSingleButton>
    </Wrapper>
  );
};

export default SubmitButton;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const StyledSingleButton = styled(SingleButton)`
  background: #333;
  color: white;
  padding: 16px;
  width: 376px;
  height: 52px;
  margin: 0 auto;
  display: block;
  font-family: Noto Sans KR;
  font-weight: 700;
  font-size: 16px;
  line-height: 12px;
  letter-spacing: 0%;
`;
