import styled from '@emotion/styled';
import { Button } from './Styled';
import useSequentialReveal from '../../hooks/useSequentialReveal';

const SubmitButton = () => {
  const { isFormValid } = useSequentialReveal();
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
