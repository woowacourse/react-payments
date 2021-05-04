import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './style';

const Snackbar = (props) => {
  const { message, isShowing } = props;

  return (
    <Style.Root>
      <Style.SnackbarInner isShowing={isShowing}>{message}</Style.SnackbarInner>
    </Style.Root>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Snackbar;
