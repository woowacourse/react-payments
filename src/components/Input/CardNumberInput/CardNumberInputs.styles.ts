import { Container } from 'components/style/InputContainer';
import styled from 'styled-components';

export const Styled = {
  CardNumberContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,
  CardNumberWrapper: styled(Container)`
    padding: 0;
    Input {
      width: 100%;
      height: 44px;
      border-radius: 7px;
      text-align: center;
    }
    .error {
      border: 1px solid red;
      background-color: var(--primary-error-color);
    }
  `,
};
