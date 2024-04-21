import styled from 'styled-components';

export const InputField = styled.fieldset`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const InputContainer = styled.div<{ $length?: number }>`
  position: relative;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$length}, 1fr)`};
  column-gap: 10px;
  width: 100%;
  padding-bottom: 22px;
`;

export const InputLabel = styled.legend`
  display: contents;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 500;
  line-height: 15px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 0;
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  line-height: 13px;
`;
