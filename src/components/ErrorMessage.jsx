import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import CardContext from '../CardContext';

const ErrorMessageStyled = styled.p`
  height: 18px;
  margin: 4px 0;
  text-align: left;
  font-size: 14px;
  color: #e24141;
`;

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

  return <ErrorMessageStyled>{children}</ErrorMessageStyled>;
}
