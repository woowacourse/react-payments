import styled from '@emotion/styled';
import { COLORS } from 'styles/theme';

const Container = styled.div`
  max-width: 20rem;
  min-height: 20rem;
  height: 100%;
  padding: 1.5rem;
  background-color: ${COLORS.white};
  border-radius: 10px;
  box-shadow: 0px 10px 30px 20px ${COLORS['black-05']};
`;

export default Container;
