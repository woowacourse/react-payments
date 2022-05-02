import React from 'react';
import styled from 'styled-components';

const AskMarkTooltip = () => {
  return (
    <Container>
      <AskMarkContainer type="button">?</AskMarkContainer>
      <InformationContainer>
        카드 뒷면 서명란에 인쇄되어 있는 19자리 중 마지막 3자리 숫자 입니다
      </InformationContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: fit-content;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-left: 20px;

  &:hover > div {
    display: block;
  }

  &:active > div {
    display: block;
  }
`;

const AskMarkContainer = styled.button`
  width: 27px;
  height: 27px;
  border: 1px solid #bababa;
  border-radius: 50%;
  color: #bababa;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #04c09e;
    border-color: #04c09e;
  }
  &:active {
    color: #04c09e;
    border-color: #04c09e;
  }
`;

const InformationContainer = styled.div`
  display: none;
  width: 180px;
  height: fit-content;
  font-size: 12px;
  padding: 5px;
  word-break: keep-all;
`;

export default AskMarkTooltip;
