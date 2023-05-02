import { PropsWithChildren } from 'react';
import Header from '../Header/Header';
import * as Styled from './Layout.styles';

const Layout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <Styled.LayoutWrapper>
      <Header />
      {children}
    </Styled.LayoutWrapper>
  );
};

export default Layout;
