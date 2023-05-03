import { MouseEvent } from 'react';

import { useIsFilledForm } from '../../hooks/useIsFilledForm';

import * as styled from './FormSubmitButton.styled';

const FormSubmitButton = ({
  handleClickFormSubmit,
}: {
  handleClickFormSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  if (!useIsFilledForm()) {
    return null;
  }

  return (
    <styled.FormSubmitButton onClick={handleClickFormSubmit} autoFocus>
      다음
    </styled.FormSubmitButton>
  );
};

export default FormSubmitButton;
