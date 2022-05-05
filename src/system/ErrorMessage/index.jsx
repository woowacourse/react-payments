import React, { useEffect } from 'react';

import Text from '../../components/Text';

const ErrorMessage = ({ children, setChildren, validation }) => {
  useEffect(() => {
    try {
      validation();
      setChildren('');
    } catch ({ message }) {
      setChildren(message);
    }
  }, [validation]);

  return <Text>{children}</Text>;
};

export default ErrorMessage;
