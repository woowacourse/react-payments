import { ReactNode } from 'react';
import GlobalStyle, { GlobalLayout } from 'style/globalStyle';

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <GlobalStyle />
      <GlobalLayout>
        {children}
      </GlobalLayout>
    </>
  );
}

export default AppLayout;
