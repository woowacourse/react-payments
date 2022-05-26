import React from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './index.styled';

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  description: string;
}

const Label = ({ id, description }: Props) => {
  return <Styled.Container htmlFor={id}>{description}</Styled.Container>;
};

Label.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
};

export default memo(Label);
