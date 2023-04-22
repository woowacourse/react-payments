/* eslint-disable @typescript-eslint/indent */
import styled, { keyframes } from 'styled-components';

export const CreditCardRegisterLayout = styled.div`
  padding: 28px 24px;
`;

export const CreditCardRegisterTopSheet = styled.div`
  display: flex;
  margin-bottom: 25px;
  font-size: 18px;
  align-items: center;
`;

export const HomeButton = styled.button`
  margin-right: 12px;
  margin-bottom: 3px;
  cursor: pointer;
`;

export const CreditCardRegisterHeader = styled.h3`
  line-height: 18.75px;
`;

export const PreviewCreditCard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const CreditCardRegisterForm = styled.form`
  display: grid;
  row-gap: 30px;
`;

export const Box = styled.div``;

export const RelativeBox = styled.div`
  position: relative;
`;

type FlexBoxProps = {
  justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
};

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
`;

export const CreditCardRegisterLabel = styled.div`
  font-size: 12px;
  color: #525252;
  margin-bottom: 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RegisterButton = styled.button`
  font-weight: 700;
  cursor: pointer;
`;

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

export const PasswordBox = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ecebf1;
  border-radius: 7px;
`;

export const ErrorMessage = styled.div`
  font-size: 12px;
  position: absolute;
  bottom: -16px;
  font-weight: 500;
  color: rgba(255, 50, 50, 0.8);
`;

export const CVCInputLayout = styled.div`
  display: flex;
  align-items: center;
`;

export const GuideMessage = styled.div`
  color: #969696;
  border: 1px solid #969696;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
