import styled from '@emotion/styled';
import SingleButton from '../common/SingleButton';
import { useNavigate } from 'react-router-dom';

interface SubmitButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  cardFirstPartNumbers?: string;
  cardBrandName: string;
}

const SubmitButton = ({
  disabled,
  children,
  cardFirstPartNumbers,
  cardBrandName,
}: SubmitButtonProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/card-register-complete', {
      state: {
        cardFirstPartNumbers,
        cardBrandName,
      },
    });
  };

  return (
    <Wrapper>
      <StyledSingleButton
        type='button'
        disabled={disabled}
        onClick={handleOnClick}
      >
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
