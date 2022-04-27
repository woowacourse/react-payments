import React from 'react';
import EasyInput from './EasyInput';

const EasyField = ({ children, name, value, onChange, ...rest }) => {
  const fieldTemplate = () =>
    children.map((child) => {
      const {
        type,
        props: { name: childName, ...childRest },
      } = child;

      return type === 'input' ? (
        <EasyInput
          key={childName}
          name={childName}
          parentName={name}
          value={value[childName]}
          onChange={onChange}
          {...childRest}
        />
      ) : (
        child
      );
    });

  return <div {...rest}>{fieldTemplate()}</div>;
};

export default EasyField;
