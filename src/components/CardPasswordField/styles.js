import styled from '@emotion/styled';

import { COLORS } from 'styles/theme';

const PasswordMasking = styled.div`
  padding: 0 0.75rem;

  &::before {
    content: '';

    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${COLORS.silverChalice};
    border-radius: 50%;
  }
`;

export default PasswordMasking;
