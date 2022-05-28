import { PropsWithChildren, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CardDispatchContext } from 'store/card/CardContext';

interface Props {
  value: string | string[];
  validate(value: string | string[]): void;
  type: string;
}

export default function ErrorMessage({
  value,
  children,
  validate,
  type,
}: PropsWithChildren<Props>) {
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

  return <Styled.ErrorMessageParagraph>{children}</Styled.ErrorMessageParagraph>;
}

const Styled = {
  ErrorMessageParagraph: styled.p`
    height: 18px;
    margin: 4px 0;
    text-align: left;
    font-size: 14px;
    color: #e24141;
  `,
};
