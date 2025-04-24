import styled from 'styled-components';
import { slideDown } from '../animation/animation';

export const FormSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${slideDown} 0.5s ease-in-out;
`;
