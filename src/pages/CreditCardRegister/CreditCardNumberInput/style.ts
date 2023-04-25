import styled, { keyframes } from 'styled-components';

const cursorBlink = keyframes`
  0% {
    opacity: 0;
  }
`;

type FakeInputType = {
  isHover: boolean;
};

export const FakeInput = styled.div<FakeInputType>`
  background-color: #ecebf1;
  border-radius: 7px;
  height: 48px;
  border: none;
  font-size: 18px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  ::after {
    content: '';
    width: 1px;
    height: 18px;
    background: ${(props) => (props.isHover ? 'black' : '#ecebf1')};
    display: inline-block;
    animation: ${cursorBlink} 1.5s steps(2) infinite;
  }
`;

export const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  outline: none;
  border: none;
  background: #ecebf1;
  height: 48px;
  font-size: 18px;
  color: #ecebf1;
  caret-color: black;
`;
