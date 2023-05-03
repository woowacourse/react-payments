import styled from 'styled-components';
import { Container } from 'components/style/InputContainer';

export const Styled = {
  PasswordInputContainer: styled(Container)`
    background-color: rgba(255, 255, 255, 0);
    width: 60%;
    padding: 0;
    align-items: center;
    Input {
      width: 44px;
      height: 44px;
      text-align: center;
      background-color: var(--primary-color);
      margin-right: 7px;
      border-radius: 7px;
    }
  `,
  DotContainer: styled.div`
    padding: 0 20px;
    font-size: 19px;
  `,
};
