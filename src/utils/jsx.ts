import { Children, isValidElement, ReactElement, ReactNode, ElementType } from 'react';

export const getChildElement = <T extends ElementType>(children: ReactNode, elementType: T): ReactElement | null => {
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

export const getAllChildElement = <T extends ElementType>(children: ReactNode, elementType: T): [ReactElement] | null => {
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
