import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  margin-bottom: 16px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

export const SubTitle = styled.p`
  color: #8b95a1;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
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
