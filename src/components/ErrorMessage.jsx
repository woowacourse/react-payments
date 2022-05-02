import React, { useContext, useEffect } from 'react';
import * as S from '../styles.js';
import CardContext from '../CardContext';

export default function ErrorMessage({ value, children, validate, type }) {
  const { dispatch } = useContext(CardContext);

  useEffect(() => {
    try {
      validate(value);
      dispatch({
        type: type,
        errorMessage: '',
      });
    } catch ({ message }) {
      dispatch({
        type: type,
        errorMessage: message,
      });
    }
  }, [value]);

  return <S.ErrorMessageParagraph>{children}</S.ErrorMessageParagraph>;
}
