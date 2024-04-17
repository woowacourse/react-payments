import styled from 'styled-components';

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const InputContainer = styled.div<{ $length?: number }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$length}, 1fr)`};
  column-gap: 10px;
  width: 100%;
`;

export const InputLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

export const ErrorMessage = styled.p`
  color: #ff3d3d;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13px;
`;
