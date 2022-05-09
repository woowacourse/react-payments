import React, { useRef, useContext } from 'react';

import CardFormPage from './components/CardFormPage';
import CardListPage from './components/CardListPage';
import CardSubmitPage from './components/CardSubmitPage';

import { CardInfoProvider, CardListProvider, PathContext } from './context';

function App() {
  const path = useContext(PathContext);
  const targetRef = useRef();
  const nextId = useRef(1);

  const checkRoutes = route => {
    switch (route) {
      case 'add-card':
        return <CardFormPage targetRef={targetRef} />;
      case 'submit-card':
        return <CardSubmitPage nextId={nextId} />;
      case 'list-card':
        return <CardListPage />;
      default:
        return `${route}는 존재하지 않는 경로입니다.`;
    }
  };

  return (
    <main className="app" ref={targetRef}>
      <CardInfoProvider>
        <CardListProvider>{checkRoutes(path)}</CardListProvider>
      </CardInfoProvider>
    </main>
  );
}

export default App;
