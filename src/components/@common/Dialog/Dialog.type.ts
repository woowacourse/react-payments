import { ButtonHTMLAttributes, HTMLAttributes } from 'react';

export interface DialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
}

export interface TriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export interface PortalProps {
  container?: HTMLElement;
}

export interface BackDropProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export interface CloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}
