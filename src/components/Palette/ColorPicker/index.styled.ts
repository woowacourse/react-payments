import styled from 'styled-components';
import { TColor } from '../../../types';
import { COLOR_TYPE } from '../../../constant';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  cursor: pointer;
  width: 80px;
`;

export const OptionContainer = styled.div<{ color: TColor }>`
  background-color: ${({ color }) => COLOR_TYPE[color]};
  width: 37px;
  height: 37px;
  border-radius: 50%;
`;

export const DescriptionContainer = styled.span`
  margin-top: 10px;
  font-size: 12px;
`;
