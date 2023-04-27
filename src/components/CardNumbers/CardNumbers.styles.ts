import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.color.grey100};
  border-radius: 7px;
  margin-bottom: 20px;

  & > * {
    width: 100%;
  }
`;

export const Pargraph = styled.p`
  width: 32px;
`;
