import React, { useContext, useEffect } from 'react';
import * as S from '../styles.js';
import { CardDispatchContext } from '../context/CardContext.jsx';

export default function ErrorMessage({ value, children, validate, type }) {
  const dispatch = useContext(CardDispatchContext);

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
