import styled from '@emotion/styled';
import { Button } from './Styled';
import useFormUiLogic from '../../hooks/useFormUiLogic';

const SubmitButton = () => {
  const { isFormValid } = useFormUiLogic();
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
