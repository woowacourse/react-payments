import { DOMAttributes } from 'react';

export interface DialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
}

export interface TriggerProps extends DOMAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export interface PortalProps {
  container?: HTMLElement;
}

export interface BackDropProps extends DOMAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export interface ContentProps extends DOMAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export interface CloseProps extends DOMAttributes<HTMLButtonElement> {
  asChild?: boolean;
}
