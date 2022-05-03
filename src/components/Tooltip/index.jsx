import styled from 'styled-components';

const TooltipContainer = styled.div`
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

const ToolTipMessage = styled.span`
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

function Tooltip({ message }) {
  return (
    <TooltipContainer>
      <span>?</span>
      <ToolTipMessage>{message}</ToolTipMessage>
    </TooltipContainer>
  );
}

export default Tooltip;
