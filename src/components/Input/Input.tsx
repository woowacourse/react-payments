import styled from 'styled-components';

import { lighten } from 'polished';

export const InputBasic = styled.input`
  background-color: #ecebf1;
  border-radius: 0.25rem;
  border-color: #9ca3af;
  padding-left: 5px;
  height: 45px;
  width: ${({ width }) => width || '100%'};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border: none;
  font-weight: 600;
  color: ${({ color }) => color};

  &::placeholder {
    color: ${({ color }) => lighten(0.2, color)};
  }
`;

export const InputBasicLeft = styled(InputBasic)`
  text-align: left;
  padding-left: 30px;
`;
