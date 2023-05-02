import React from 'react';

import { getErrorMessage } from '../pages/AddCard/domain/domain';
import { ErrorMessageProps } from '../type';
import './ErrorMessage.css';

const ErrorMessage = ({ inputType, status }: ErrorMessageProps) => {
  return <div className="error-message">{getErrorMessage(inputType, status)}</div>;
};

export default React.memo(ErrorMessage);
