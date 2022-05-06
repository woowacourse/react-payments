import React, { useRef } from 'react';

const AutoFocusInputBox = ({ children, maxValueLength }) => {
  console.log(children);
  const flattenChildren = React.Children.toArray(children);
  const inputChildren = flattenChildren.filter((child) => child.type?.target === 'input');

  const refs = Array.from(
    {
      length: inputChildren.length,
    },
    useRef,
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
    cb(e);
    moveFocus(e, index);
  };

  let idx = 0;
  const refedInputChildren = flattenChildren.map((child) => {
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

  return <>{refedInputChildren}</>;
};

export default AutoFocusInputBox;
