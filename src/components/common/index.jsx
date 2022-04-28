import styled from 'styled-components';

const InputContainer = styled.div`
  position: ${props => props.position || 'static'};
  width: ${props => props.width || '100%'};
  margin: 16px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '100%'};
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
  min-width: 50px;
  width: 100%;
  text-align: center;
  outline-offset: 2px;
  border: none;

  &::placeholder {
    color: #a0a0a0;
  }
  &:focus {
    outline: 1px solid #a0a0a0;
  }
`;

const DotContainer = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
`;

const Span = styled.span`
  padding: ${props => props.padding || '8px'};
`;

export { InputContainer, InputWrapper, Label, Input, DotContainer, Span };
