import React, { useRef } from 'react';

export const AutoFocusInputContainer = ({ children, maxValueLength }) => {
  const flattenChildren = React.Children.toArray(children);
  const inputChildren = flattenChildren.filter(
    (child) => child.type?.target === 'input'
  );

  const refs = Array.from(
    {
      length: inputChildren.length,
    },
    useRef
  );

  const moveFocus = (e, index) => {
    if (e.key === 'Backspace') {
      return;
    }

    if (e.target.value.length === maxValueLength) {
      refs[index + 1]?.current.focus();
    }
  };

  const compositeOnChange = (cb, index) => (e) => {
    if (e.target.value.length > maxValueLength) {
      return;
    }

    cb(e);
    moveFocus(e, index);
  };

  let idx = 0;
  const refedChildren = flattenChildren.map((child) => {
    if (child.type?.target === 'input') {
      const currentIndex = idx;
      idx += 1;

      return {
        ...child,
        ref: refs[currentIndex],
        props: {
          ...child.props,
          onChange: compositeOnChange(child.props.onChange, currentIndex),
        },
      };
    }

    return child;
  });

  return <>{refedChildren}</>;
};
