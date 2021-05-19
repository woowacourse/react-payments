import React from 'react';
import PropTypes from 'prop-types';
import backButtonSvg from '../../assets/backbutton.svg';
import * as Style from './style';

const PageHost = (props) => {
  const { navigationTitle, hasBackButton, handleGoBack, children } = props;

  return (
    <Style.Root>
      <Style.NavigationBar title={navigationTitle}>
        {hasBackButton && <Style.BackButton src={backButtonSvg} alt="back-button" onClick={handleGoBack} />}
        <Style.NavigationTitle>{navigationTitle}</Style.NavigationTitle>
      </Style.NavigationBar>
      <section>{children}</section>
    </Style.Root>
  );
};

PageHost.propTypes = {
  navigationTitle: PropTypes.string.isRequired,
  hasBackButton: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleGoBack: PropTypes.func,
};

export default PageHost;
