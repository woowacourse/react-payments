import React from 'react';
import EasyInput from './EasyInput';

const EasyField = ({ children, name, value, onChange, ...rest }) => {
  const fieldTemplate = () =>
    children.map((child) => {
      const {
        type,
        props: { name: childName, value: childValue, ...childRest },
      } = child;
      const properties = {
        key: childName,
        name: childName,
        parentName: name,
        value: value[childName],
        onChange,
        ...childRest,
      };

      return type === 'input' ? <EasyInput {...properties} /> : child;
    });

  return <div {...rest}>{fieldTemplate()}</div>;
};

export default EasyField;
