import { CardListPage, NotFound } from 'pages';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { initialState, reducer } from 'reducers';
import { memo, useReducer } from 'react';

import AddPageRouter from 'routers';
import { CardContext } from 'contexts';

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
          <Route path="/add/*" element={<AddPageRouter card={state.card} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CardContext.Provider>
  );
}

export default memo(App);
