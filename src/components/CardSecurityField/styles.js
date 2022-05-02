import styled from '@emotion/styled';

import { COLORS } from 'styles/theme';

const SecurityCodeTip = styled.div`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  color: ${COLORS.black};
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid ${COLORS.alto};
  color: ${COLORS.silver};
  cursor: pointer;

  &::before {
    content: '?';
    font-family: '돋움';
    font-weight: bold;
  }
`;

export default SecurityCodeTip;
