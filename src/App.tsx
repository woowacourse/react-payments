import GlobalStyles from './GlobalStyles';
import { PropsWithChildren } from 'react';

function App({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

export default App;
