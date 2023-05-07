import { Container } from 'components/style/InputContainer';
import styled from 'styled-components';

export const Styled = {
  CardNumberContainer: styled.div`
    display: flex;
    flex-direction: row;
    input:focus {
      background-color: var(--focus-input-color);
    }
    input.error {
      background-color: var(--error-input-color);
    }
  `,
  CardNumberWrapper: styled(Container)`
    padding: 0;
    width: 20%;
    Input {
      width: 100%;
      height: 44px;
      border-radius: 7px;
      text-align: center;
    }
  `,
  DASH: styled.span`
    display: flex;
    align-items: center;
    margin: auto;
    font-size: 24px;
  `,
};
