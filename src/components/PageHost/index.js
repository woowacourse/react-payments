import React from 'react';
import PropTypes from 'prop-types';
import backButtonSvg from '../../assets/backbutton.svg';
import * as Style from './style';

const PageHost = (props) => {
  const { navigationTitle, hasBackButton, children } = props;

  return (
    <Style.Root>
      <Style.NavigationBar title={navigationTitle}>
        {hasBackButton && <img src={backButtonSvg} alt="back-button" />}
        <Style.NavigationTitle>{navigationTitle}</Style.NavigationTitle>
      </Style.NavigationBar>
      <div>{children}</div>
    </Style.Root>
  );
};

PageHost.propTypes = {
  navigationTitle: PropTypes.string.isRequired,
  hasBackButton: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageHost;
