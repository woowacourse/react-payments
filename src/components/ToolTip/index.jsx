import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
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

const ToolTipContainer = styled.button`
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
  position: absolute;
  left: 40px;
  width: 180px;
  height: fit-content;
  font-size: 12px;
  padding: 5px;
  word-break: keep-all;
`;

const ToolTip = () => {
  return (
    <Container>
      <ToolTipContainer>?</ToolTipContainer>
      <InformationContainer>
        카드 뒷면 서명란에 인쇄되어 있는 19자리 중 마지막 3자리 숫자 입니다
      </InformationContainer>
    </Container>
  );
};

export default ToolTip;
