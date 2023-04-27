import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  color: ${theme.color.grey400};
  cursor: pointer;
`;

export const Button = styled.button`
  width: 208px;
  height: 124px;
  background-color: ${theme.color.grey200};
  border-radius: 5px;
  text-align: center;
  font-size: 30px;
`;
