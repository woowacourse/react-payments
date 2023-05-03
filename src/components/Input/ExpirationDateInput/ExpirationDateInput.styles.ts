import { Container } from 'components/style/InputContainer';
import styled from 'styled-components';

export const Styled = {
  ExpirationDateContainer: styled(Container)`
    width: 137px;
    justify-content: center;
    Input {
      text-align: center;
    }
  `,
  SLASH: styled.span`
    &::before {
      content: '/';
    }
  `,
};
