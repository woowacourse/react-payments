import React, { PropsWithChildren, cloneElement } from 'react';
import { createPortal } from 'react-dom';
import DialogProvider, { useDialogContext } from '../../../context/DialogContext';
import { composeEventHandlers } from '../../../utils/dom';
import { getValidProps } from '../../../utils/jsx';
import * as Styled from './Dialog.styles';
import {
  BackDropProps,
  CloseProps,
  ContentProps,
  DialogProps,
  PortalProps,
  TriggerProps,
} from './Dialog.type';

function Dialog(props: PropsWithChildren<DialogProps>) {
  const { children, ...restProps } = props;

  return <DialogProvider value={restProps}>{children}</DialogProvider>;
}

function Trigger(props: PropsWithChildren<TriggerProps>) {
  const { asChild, firstChild, onClick: onClickProps, ...restProps } = getValidProps(props);
  const { openHandler } = useDialogContext();

  if (asChild) {
    return cloneElement(firstChild, {
      ...restProps,
      onClick: composeEventHandlers(onClickProps, openHandler),
    });
  }

  return (
    <Styled.Trigger {...restProps} onClick={composeEventHandlers(onClickProps, openHandler)}>
      Trigger
    </Styled.Trigger>
  );
}

function Portal({ children, container = document.body }: PropsWithChildren<PortalProps>) {
  const { isOpened } = useDialogContext();

  return isOpened ? createPortal(children, container) : null;
}

function BackDrop(props: PropsWithChildren<BackDropProps>) {
  const { asChild, firstChild, onClick: onClickProps, ...restProps } = getValidProps(props);
  const { isOpened, openHandler } = useDialogContext();

  const backDrop = asChild ? (
    cloneElement(firstChild, {
      ...restProps,
      onClick: composeEventHandlers(onClickProps, openHandler),
    })
  ) : (
    <Styled.BackDrop {...restProps} onClick={composeEventHandlers(onClickProps, openHandler)} />
  );

  return isOpened ? backDrop : null;
}

function Content(props: PropsWithChildren<ContentProps>) {
  const { asChild, firstChild, children, ...restProps } = getValidProps(props);
  const { isOpened } = useDialogContext();

  const content = asChild ? (
    cloneElement(firstChild, {
      ...restProps,
    })
  ) : (
    <Styled.Content>{children}</Styled.Content>
  );

  return isOpened ? content : null;
}

function Close(props: PropsWithChildren<CloseProps>) {
  const { asChild, firstChild, onClick: onClickProps, ...restProps } = getValidProps(props);
  const { isOpened, openHandler } = useDialogContext();

  const close = asChild ? (
    cloneElement(firstChild, {
      ...restProps,
      onClick: composeEventHandlers(onClickProps, openHandler),
    })
  ) : (
    <Styled.Close onClick={composeEventHandlers(onClickProps, openHandler)}>𝗫</Styled.Close>
  );

  return isOpened ? close : null;
}

Dialog.Trigger = Trigger;
Dialog.Portal = Portal;
Dialog.BackDrop = BackDrop;
Dialog.Content = Content;
Dialog.Close = Close;

export default Dialog;
