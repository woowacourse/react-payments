import React, { useRef, useContext } from "react";

import { CardInfoProvider } from "components/context/CardInfoProvider";
import { CardListProvider } from "components/context/CardListProvider";
import { PathContext } from "components/context/PathProvider";

import CardFormPage from "components/pages/CardFormPage";
import CardListPage from "components/pages/CardListPage";
import CardSubmitPage from "components/pages/CardSubmitPage";

function App() {
  const path = useContext(PathContext);
  const targetRef = useRef();
  const nextId = useRef(1);

  const checkRoutes = (route) => {
    switch (route) {
      case "add-card":
        return <CardFormPage targetRef={targetRef} />;
      case "submit-card":
        return <CardSubmitPage nextId={nextId} />;
      case "list-card":
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
