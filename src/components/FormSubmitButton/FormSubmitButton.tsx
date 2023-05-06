import { MouseEvent } from 'react';

import { useIsFilledForm } from '../../hooks/useIsFilledForm';

import * as styled from './FormSubmitButton.styled';

const FormSubmitButton = ({
  handleFormSubmitClick,
  text,
}: {
  buttonRef?: React.RefObject<HTMLButtonElement>;
  handleFormSubmitClick: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
}) => {
  if (!useIsFilledForm()) {
    return null;
  }

  return (
    <styled.FormSubmitButton onClick={handleFormSubmitClick} autoFocus>
      {text}
    </styled.FormSubmitButton>
  );
};

export default FormSubmitButton;
