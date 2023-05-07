import {
  Attributes,
  Children,
  cloneElement,
  ForwardedRef,
  HTMLAttributes,
  isValidElement,
} from "react";

type WithRef<T> = (Partial<T> & Attributes) & { ref?: ForwardedRef<Unpack<T>> };
type Unpack<T> = T extends HTMLAttributes<infer U> ? U : T;

export function getCustomElement<T>(
  asChild: boolean,
  children: React.ReactElement[] | React.ReactElement | undefined,
  props: WithRef<T>
) {
  if (asChild && isValidElement<T>(children)) {
    const child = Children.only(children);
    return cloneElement(child, props);
  }
  return;
}
