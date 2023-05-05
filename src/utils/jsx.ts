import {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
  ElementType,
  RenderProps,
  PropsWithChildren,
} from 'react';
import { UnPack } from '../types/utility';

export const getChildElement = <T extends ElementType>(
  children: ReactNode,
  elementType: T
): ReactElement | null => {
  let targetChildren: ReactElement | null = null;
  const childrenArray = Children.toArray(children);

  childrenArray.forEach((child) => {
    if (!isValidElement(child)) return;
    if (child.type === elementType) targetChildren = child;

    if (child.props.children) {
      const nestedChild = getChildElement(child.props.children, elementType);

      if (nestedChild) targetChildren = nestedChild;
    }
  });

  return targetChildren;
};

export const getAllChildElement = <T extends ElementType>(
  children: ReactNode,
  elementType: T
): [ReactElement] | null => {
  let targetChildren: [ReactElement] | null = null;
  const childrenArray = Children.toArray(children);

  childrenArray.forEach((child) => {
    if (!isValidElement(child)) return;

    if (child.type === elementType) {
      !targetChildren ? (targetChildren = [child]) : targetChildren.push(child);
    }

    if (child.props.children) {
      const nestedChildren = getAllChildElement(child.props.children, elementType);
      if (nestedChildren) {
        !targetChildren ? (targetChildren = nestedChildren) : targetChildren.push(...nestedChildren);
      }
    }
  });

  return targetChildren;
};

export const validateAsChild = (childrenArray: ReturnType<typeof Children.toArray>) => {
  if (childrenArray.length > 1) throw new Error('Must use only 1 child');
  if (childrenArray.length === 0) throw new Error('Must use at least 1 child');
};

export const getResolvedChildren: <T>(
  children: ReactNode | RenderProps<T>,
  props: T
) => ReactNode | ReactElement<T> = (children, props) => {
  return typeof children === 'function' ? children(props) : children;
};

export const getValidChild = <T>(child: UnPack<ReturnType<typeof Children.toArray>>) => {
  return isValidElement<T>(child) ? child : null;
};

export function getValidProps<P extends PropsWithChildren>(
  props: P
):
  | (P & {
      asChild: true;
      firstChild: ReactElement<P>;
    })
  | (P & { asChild: false; firstChild: null }) {
  const childrenArray = Children.toArray(props.children);
  const firstChild = getValidChild<P>(childrenArray[0]);

  if ('asChild' in props && props.asChild && firstChild) {
    validateAsChild(childrenArray);

    return { ...props, asChild: true, firstChild };
  }

  return { ...props, asChild: false, firstChild: null };
}
