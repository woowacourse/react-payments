import styled from 'styled-components';
import { Success } from '../../assets';

export const Container = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;

  color: var(--grey-600);
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
`;

export const SuccessIcon = styled.div`
  width: 76px;
  height: 76px;
  background: url("${Success}") no-repeat;
`;

export const CompleteButton = styled.button`
  width: 320px;
  border-radius: 5px;
  padding: 5px;
  background: var(--grey-600);
  color: var(--grey-200);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  text-align: center;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background: var(--grey-500);
  }
`;
