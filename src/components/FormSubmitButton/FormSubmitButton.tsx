import { PATHNAME } from '../../constants/pathname';
import { useIsFilledForm } from '../../hooks/useIsFilledForm';
import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './FormSubmitButton.styled';

const FormSubmitButton = () => {
  const { navigationTo } = useNavigationTo();

  return (
    <>
      {useIsFilledForm() && (
        <styled.FormSubmitButton
          onClick={() => navigationTo(PATHNAME.NICKNAME)}
          autoFocus
        >
          다음
        </styled.FormSubmitButton>
      )}
    </>
  );
};

export default FormSubmitButton;
