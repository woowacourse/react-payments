import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { COLORS } from 'styles/theme';

const CONTAINER_STYLES = {
  PROPS_ERROR_MESSAGE: css`
    input {
      border: 1px solid ${COLORS.cornflowerLilac};
    }
  `,
};

const Container = styled.div`
  margin: 1.563rem 0;

  ${({ isError }) => isError === true && CONTAINER_STYLES.PROPS_ERROR_MESSAGE}
`;

const InputTitle = styled.span`
  display: flex;
  align-items: center;

  font-size: 0.75rem;
  line-height: 0.875rem;

  margin-bottom: 0.25rem;

  color: ${COLORS.dorado};
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0.375rem 0;
  color: ${COLORS.alto};
  border-radius: 0.25rem;
  gap: 0.45rem;
`;

const ErrorMessage = styled.div`
  font-size: 0.75rem;
  color: ${COLORS.bittersweet};
`;

export { Container, InputTitle, InputContainer, ErrorMessage };
