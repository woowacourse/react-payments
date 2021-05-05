import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { PageHeader } from '../../../utils/style/Page.js';

/**
 * Primary UI component for user interaction
 */
export const Header = ({ titleText, hasButton, ...props }) => {
  return (
    <PageHeader>
      <Styled.Container>
        {hasButton && <Styled.Button {...props}>{'◀︎'}</Styled.Button>}
        <Styled.Title>{titleText}</Styled.Title>
      </Styled.Container>
    </PageHeader>
  );
};

Header.propTypes = {
  titleText: PropTypes.string,
  hasButton: PropTypes.bool,
};

Header.defaultProps = {
  titleText: 'default title',
  hasButton: 'false',
};
