import React from 'react';

const EasyInput = ({ parentName, name, value, onChange, ...rest }) => {
  return (
    <input
      key={name}
      name={name}
      value={value}
      onChange={({ target }) => {
        onChange(parentName, (prevState) => {
          const state = { ...prevState };
          state[name] = target.value;

          return state;
        });
      }}
      {...rest}
    />
  );
};

export default EasyInput;
