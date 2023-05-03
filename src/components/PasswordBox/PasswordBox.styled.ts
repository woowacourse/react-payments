import styled from 'styled-components';

import { COLOR } from '../../constants/card';

export const PasswordBox = styled.div``;

export const InputBox = styled.div`
  display: flex;

  margin: 8px 0;

  & > input:not(:last-child) {
    margin-right: 8px;
  }
`;

export const RestPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
`;

export const EllipseBox = styled.div`
  width: 5px;
  height: 5px;

  border-radius: 50%;
  background: black;

  background: ${props => (props.color ? props.color : COLOR.WHITE)};
`;
