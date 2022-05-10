import { memo, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AddCompletePage, AddPage, CardListPage, NotFound } from './pages';

import { CardContext } from './contexts';
import { initialState, reducer } from './reducers';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardContext.Provider value={dispatch}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={<CardListPage cardList={state.cardList} />}
          />
          <Route path="/add" element={<AddPage />} />
          <Route
            path="/complete"
            element={<AddCompletePage card={state.card} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CardContext.Provider>
  );
}

export default memo(App);
