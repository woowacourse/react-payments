import { Container } from 'components/style/InputContainer';
import styled from 'styled-components';

export const Styled = {
  ExpirationDateContainer: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    input:focus {
      background-color: var(--focus-input-color);
    }
    input.error {
      background-color: var(--error-input-color);
    }
  `,
  ExpirationDateWrapper: styled(Container)`
    padding: 0;
    width: 60px;
    justify-content: center;
    input {
      height: 44px;
      border-radius: 7px;
      text-align: center;
    }
  `,
  SLASH: styled.span`
    display: flex;
    align-items: center;
    margin: 2px;
    &::before {
      content: '/';
    }
  `,
};
