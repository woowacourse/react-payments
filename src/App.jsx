import React, { useRef, useLayoutEffect } from 'react';
import { useRoutes } from 'react-router-dom';

import { Header } from './components';
import useCardState from './hooks/useCardState';

import useDispatch from './hooks/useDispatch';

import routes from './Routes';

function App() {
  const dispatch = useDispatch();
  const targetRef = useRef();
  const content = useRoutes(routes);
  const { title } = useCardState();

  useLayoutEffect(() => {
    if (targetRef.current) {
      dispatch({
        type: 'DIMENSIONS',
        dimensions: {
          width: targetRef.current.offsetWidth,
          height: targetRef.current.offsetHeight,
        },
      });
    }
  }, [dispatch]);

  return (
    <div className="app" ref={targetRef}>
      <div className="content-container">
        <Header title={title} />
        {content}
      </div>
    </div>
  );
}

export default App;
