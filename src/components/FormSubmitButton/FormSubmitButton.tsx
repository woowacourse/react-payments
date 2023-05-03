import { FormEvent } from 'react';

import { useIsFilledForm } from '../../hooks/useIsFilledForm';

import * as styled from './FormSubmitButton.styled';

const FormSubmitButton = ({
  handleSubmit,
}: {
  handleSubmit: (event: FormEvent<HTMLButtonElement>) => void;
}) => {
  if (!useIsFilledForm()) {
    return null;
  }

  return (
    <styled.FormSubmitButton type="submit" onSubmit={handleSubmit} autoFocus>
      다음
    </styled.FormSubmitButton>
  );
};

export default FormSubmitButton;
