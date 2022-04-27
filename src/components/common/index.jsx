import styled from 'styled-components';

const InputContainer = styled.div`
  position: ${props => props.position || 'static'};
  width: 100%;
  margin: 16px 0;
  background-color: black;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;s
  margin-top: 0.375rem;
  color: ${props => props.color};
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

const Input = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: 1px solid #000;
  border-radius: 0.25rem;
`;

const DotContainer = styled.div`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
`;

const Span = styled.span`
  padding: 8px;
`;

export { InputContainer, InputWrapper, Label, Input, DotContainer, Span };
