import type { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

type TooltipPlacement = 'top' | 'left' | 'right' | 'bottom';

const TooltipBase = styled.div`
  display: inline-block;

  position: absolute;
`;

type TooltipTriggerProps = {
  $visible?: boolean;
};

const TooltipTrigger = styled.div<TooltipTriggerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: relative;

  white-space: nowrap;

  & > ${TooltipBase} {
    display: ${(props) => (props.$visible ? 'initial' : 'none')};
  }

  &:hover > ${TooltipBase} {
    display: initial;
  }
`;

const TooltipTop = styled(TooltipBase)`
  bottom: 100%;
`;

const TooltipBottom = styled(TooltipBase)`
  top: 100%;
`;

const TooltipLeft = styled(TooltipBase)`
  right: 100%;
`;

const TooltipRight = styled(TooltipBase)`
  left: 100%;
`;

const TooltipBalloon = styled.div`
  margin: 8px;

  padding: 8px;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.color.grey3};

  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.fontColor.secondary};
`;

const TooltipPlacements = {
  top: TooltipTop,
  bottom: TooltipBottom,
  left: TooltipLeft,
  right: TooltipRight,
} satisfies Record<TooltipPlacement, ReactNode>;

type TooltipProps = PropsWithChildren<{
  placement: TooltipPlacement;
  content: ReactNode;
  visible?: boolean;
}>;

export const Tooltip = (props: TooltipProps) => {
  const { placement, content, visible, children } = props;

  const TooltipSelected = TooltipPlacements[placement];

  return (
    <TooltipTrigger $visible={visible}>
      {children}
      <TooltipSelected>
        <TooltipBalloon>{content}</TooltipBalloon>
      </TooltipSelected>
    </TooltipTrigger>
  );
};
