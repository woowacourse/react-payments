import styled from '@emotion/styled';

import { BRAND_COLORS, COLORS, LAYOUT } from 'styles/theme';

const Container = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: none;
  border-radius: ${LAYOUT.BORDER_RADIUS};
  padding: 0.714rem 1.429rem;
  background-color: ${BRAND_COLORS.accent};
  color: ${BRAND_COLORS.accentFont};
  transition: background-color 0.3s ease;

  &:hover {
    filter: brightness(1.2);
  }

  &:disabled {
    cursor: default;
    background-color: ${COLORS.alto};
    color: ${COLORS.silverChalice};
    filter: brightness(1);
  }
`;

export default Container;
