import { Container } from 'components/style/InputContainer';
import styled from 'styled-components';

export const Styled = {
  ExpirationDateContainer: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `,
  ExpirationDateWrapper: styled(Container)`
    padding: 0;
    width: 60px;
    justify-content: center;
    Input {
      height: 44px;
      border-radius: 7px;
      text-align: center;
    }
    .error {
      border: 1px solid red;
      background-color: var(--primary-error-color);
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
