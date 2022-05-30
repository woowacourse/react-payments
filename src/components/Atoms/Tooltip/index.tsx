import styled from 'styled-components';

interface TooltipProps {
  message: string;
  margin: string;
}

const TooltipContainer = styled.div<Pick<TooltipProps, 'margin'>>`
  position: relative;
  width: 27px;
  height: 27px;
  margin: ${props => props.margin};
  padding-top: 3px;
  border-radius: 13.5px;
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_005};
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.085em;
  text-align: center;
  color: ${({ theme }) => theme.PALETTE.GRAY_006};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.PALETTE.MINT_002};
    color: ${({ theme }) => theme.PALETTE.MINT_002};
  }
`;

const ToolTipMessage = styled.span`
  position: absolute;
  left: -3px;
  top: 30px;
  width: 200px;
  padding: 5px;
  border-radius: 4px;
  background: ${({ theme }) => theme.PALETTE.BLACK_001};

  visibility: hidden;

  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.085em;
  text-align: start;
  color: ${({ theme }) => theme.PALETTE.GRAY_006};

  ${TooltipContainer}:hover & {
    visibility: visible;
  }

  &::after {
    position: absolute;
    top: -5px;
    left: 11px;

    border-bottom: solid 5px ${({ theme }) => theme.PALETTE.BLACK_001};
    border-left: solid 4px transparent;
    border-right: solid 4px transparent;
    content: ' ';
  }
`;

function Tooltip({ message, margin }: TooltipProps) {
  return (
    <TooltipContainer margin={margin}>
      <span>?</span>
      <ToolTipMessage>{message}</ToolTipMessage>
    </TooltipContainer>
  );
}

export default Tooltip;
