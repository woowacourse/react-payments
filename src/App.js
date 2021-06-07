import { useContext } from 'react';

import { Page } from './components/Page';
import { PageContext } from './contexts/PageContextProvider';

function App() {
  const { renderCurrentPage } = useContext(PageContext);

  return (
    <div className="App">
      <Page>{renderCurrentPage()}</Page>
    </div>
  );
}

export default App;
