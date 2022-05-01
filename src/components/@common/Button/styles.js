import styled from '@emotion/styled';

import { BRAND_COLOR, COLORS, LAYOUT } from 'styles/theme';

const Container = styled.button`
  border: none;
  border-radius: ${LAYOUT.BORDER_RADIUS};
  padding: 0.714rem 1.429rem;
  background-color: ${BRAND_COLOR.accent};
  color: ${BRAND_COLOR.accentFont};

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
