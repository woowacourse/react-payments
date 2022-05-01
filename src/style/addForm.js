import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;
  width: 27px;
  height: 27px;
  margin: 28px 0 0 11px;
  padding-top: 3px;
  border-radius: 13.5px;
  border: 1px solid #bababa;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.085em;
  text-align: center;
  color: #969696;
  cursor: pointer;

  &:hover {
    border: 1px solid #04c09e;
    color: #04c09e;
  }
`;

export const ToolTipMessage = styled.span`
  position: absolute;
  left: -3px;
  top: 30px;
  width: 200px;
  padding: 5px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.8);
  visibility: hidden;

  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.085em;
  text-align: start;
  color: #969696;

  ${TooltipContainer}:hover & {
    visibility: visible;
  }

  &::after {
    position: absolute;
    top: -5px;
    left: 11px;
    border-bottom: solid 5px rgba(0, 0, 0, 0.8);
    border-left: solid 4px transparent;
    border-right: solid 4px transparent;
    content: ' ';
  }
`;

export const StyledInput = styled.input`
  width: ${props => props.width};
  height: 45px;
  background: ${props => props.backgroundColor};
  border-radius: 7px;
  padding: 12px;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
  &:focus {
    outline-color: ${props => (props.isValid ? '#04c09e' : 'red')};
  }
`;

export const InputLabelText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: #525252;
`;

export const LabeledInputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 7px;
`;

export const LabeledInputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => props.width || '100%'};
`;

export const LabeledInputBody = styled.div`
  display: flex;
  gap: 4px;
`;

export const LengthChecker = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.05em;
  color: #525252;
`;

export const LabeledInputFooter = styled.span`
  position: absolute;
  word-break: normal;
  bottom: -14px;
  width: 300px;
  overflow: visible;

  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: red;
`;

export const Button = styled.button`
  display: ${props => (props.hidden ? 'none' : 'block')};
  width: ${props => props.width};
  height: ${props => props.height};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #04c09e;
  background-color: white;
`;
