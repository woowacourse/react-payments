import React from 'react';
import backButtonSvg from '../../assets/backbutton.svg';
import * as Style from './style';

const PageHost = (props) => {
  return (
    <Style.Root>
      <Style.NavigationBar>
        {props.hasBackButton && <img src={backButtonSvg} alt="back-button" />}
        <Style.NavigationTitle>{props.navigationTitle}</Style.NavigationTitle>
      </Style.NavigationBar>
      <div>{props.children}</div>
    </Style.Root>
  );
};

export default PageHost;
