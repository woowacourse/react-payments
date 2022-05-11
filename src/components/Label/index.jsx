import { memo } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './index.styled';

const Label = ({ id, description }) => {
  return <Styled.Container htmlFor={id}>{description}</Styled.Container>;
};

Label.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
};

export default memo(Label);
