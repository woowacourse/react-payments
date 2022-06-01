import React, { Suspense, lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./common/Loading";

const AddCard = lazy(() => import("./pages/AddCard"));
const CardList = lazy(() => import("./pages/CardList"));
const ConfirmAddCard = lazy(() => import("./pages/ConfirmAddCard"));
const ConfirmEditCard = lazy(() => import("./pages/ConfirmEditCard"));
const EditCard = lazy(() => import("./pages/EditCard"));

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="/addCard" element={<AddCard />} />
            <Route path="/editCard/:id" element={<EditCard />} />
            <Route path="/confirmAddCard" element={<ConfirmAddCard />} />
            <Route path="/confirmEditCard/:id" element={<ConfirmEditCard />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
export default App;