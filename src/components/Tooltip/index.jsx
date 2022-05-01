import { TooltipContainer, ToolTipMessage } from '../../style/addForm';

function Tooltip({ message }) {
  return (
    <TooltipContainer>
      <span>?</span>
      <ToolTipMessage>{message}</ToolTipMessage>
    </TooltipContainer>
  );
}

export default Tooltip;
