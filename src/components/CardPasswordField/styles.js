import styled from '@emotion/styled';

import { COLORS } from 'styles/theme';

const PasswordMasking = styled.div`
  padding: 0 12px;

  &::before {
    content: '';

    display: block;
    width: 8px;
    height: 8px;
    background-color: ${COLORS.silverChalice};
    border-radius: 50%;
  }
`;

export default PasswordMasking;
