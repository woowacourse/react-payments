import React from 'react';

interface FormErrorMessageProps {
  errorMessage?: string;
}

function FormErrorMessage(props: FormErrorMessageProps) {
  const { errorMessage } = props;

  return <div>{errorMessage}</div>;
}

export default FormErrorMessage;
