import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: fit-content;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-left: 20px;

  &:hover > p {
    display: block;
  }

  &:active > p {
    display: block;
  }
`;

export const AskMarkButton = styled.button`
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

export const TooltipText = styled.p`
  display: none;
  width: 180px;
  height: fit-content;

  position: absolute;
  top: -15px;
  left: 25px;
  font-size: 12px;
  padding: 5px;
  word-break: keep-all;
`;
