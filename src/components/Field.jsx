/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Field = ({ children, className }) => {
  const [valueList, setValueList] = useState(
    children
      .filter((child) => child.type === 'input')
      .reduce((next, child) => {
        next[child.props.name] = child.props.value ?? '';

        return next;
      }, {})
  );

  const createInput = (properties) => {
    const { name, onChange, value, ...rest } = properties;

    return (
      <input
        name={name}
        onChange={(event) => {
          setValueList((prevValueList) => ({
            ...prevValueList,
            [name]: event.target.value,
          }));
        }}
        value={valueList[name]}
        {...rest}
      />
    );
  };

  return (
    <div className={className}>
      {children.map((child) =>
        child.type === 'input' ? createInput(child.props) : child
      )}
    </div>
  );
};

Field.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Field.defaultProps = {
  className: '',
};

export default Field;
