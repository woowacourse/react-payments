import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { PageHeader } from '../../../utils/style/Page.js';

export const Header = ({ children }) => {
  return (
    <PageHeader>
      <Styled.Container>
        {children}
      </Styled.Container>
    </PageHeader>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.elementType, PropTypes.array]),
};
