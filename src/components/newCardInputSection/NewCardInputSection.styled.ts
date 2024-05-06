import styled from 'styled-components';

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 31px;
  margin-right: 31px;
`;

export const MainText = styled.h1`
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  text-align: left;
  color: #000000;
`;

export const Subtext = styled.p`
  font-family: Noto Sans KR;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  color: #8b95a1;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 12px;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ErrorText = styled.div`
  height: 20px;
  line-height: 20px;
  font-size: 9.5px;
  color: #ff3d3d;
`;
