import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_TYPE } from '../../../constants/constants';
import * as Style from './style';

const RegisterInputWrapper = (props) => {
  const { type, label, width, currentNameLength, children } = props;

  const isOwnerName = type === INPUT_TYPE.OWNER_NAME.type;
  const wordCount = <Style.WordCount>{`${currentNameLength}/30`}</Style.WordCount>;

  return (
    <Style.Root>
      <Style.InputHeader width={width}>
        <Style.Label htmlFor={type}>{label}</Style.Label>
        {isOwnerName && wordCount}
      </Style.InputHeader>
      <Style.FlexContainer>{children}</Style.FlexContainer>
    </Style.Root>
  );
};

RegisterInputWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  currentNameLength: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default RegisterInputWrapper;
