import { useNavigate } from 'react-router-dom';

import { PATHNAME } from '../../constants/pathname';
import { useIsFilledForm } from '../../hooks/useIsFilledForm';

import * as styled from './FormSubmitButton.styled';

const FormSubmitButton = () => {
  const navigation = useNavigate();

  return (
    <>
      {useIsFilledForm() && (
        <styled.FormSubmitButton
          onClick={() => navigation(PATHNAME.NICKNAME)}
          autoFocus
        >
          다음
        </styled.FormSubmitButton>
      )}
    </>
  );
};

export default FormSubmitButton;
