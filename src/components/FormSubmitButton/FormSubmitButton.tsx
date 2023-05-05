import { MouseEvent } from 'react';

import { useIsFilledForm } from '../../hooks/useIsFilledForm';

import * as styled from './FormSubmitButton.styled';

const FormSubmitButton = ({
  handleClickFormSubmit,
  text,
}: {
  buttonRef?: React.RefObject<HTMLButtonElement>;
  handleClickFormSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
}) => {
  if (!useIsFilledForm()) {
    return null;
  }

  return (
    <styled.FormSubmitButton onClick={handleClickFormSubmit} autoFocus>
      {text}
    </styled.FormSubmitButton>
  );
};

export default FormSubmitButton;
