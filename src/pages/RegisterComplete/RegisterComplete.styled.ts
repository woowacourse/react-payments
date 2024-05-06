import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;

  padding: 0 16px;
  width: 100%;
  max-width: 375px;
`;

export const Img = styled.img`
  width: 76px;
  height: 76px;
`;

export const CompleteText = styled.p`
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 36.2px;
  text-align: center;
  word-break: keep-all;
`;
