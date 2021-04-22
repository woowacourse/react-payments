import React from 'react';
import * as Style from './style';

const PageHost = (props) => {
  return (
    <Style.Root>
      <Style.NavigationBar>
        <span>{props.navigationTitle}</span>
      </Style.NavigationBar>
      <div>{props.children}</div>
    </Style.Root>
  );
};

export default PageHost;
