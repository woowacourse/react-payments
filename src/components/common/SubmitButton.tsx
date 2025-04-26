import { useCardForm } from '../../contexts/CardFormContext';
import styled from '@emotion/styled';
import { Button } from './Styled';

const SubmitButton = () => {
  const { isFormValid } = useCardForm();
  return (
    <>{isFormValid && <ConfirmButton type="submit">확인</ConfirmButton>}</>
  );
};

export default SubmitButton;

const ConfirmButton = styled(Button)`
  position: sticky;
  bottom: 0;
  height: 52px;
`;
