import React, { useRef, useLayoutEffect } from 'react';

import {
  CardNumber,
  CardOwner,
  CardPassword,
  CardSecurityCode,
  CardShape,
  Footer,
  Header,
  DueDate,
} from './components';

import useCardState from './hooks/useCardState';
import useDispatch from './hooks/useDispatch';

function App() {
  const state = useCardState();
  const dispatch = useDispatch();
  const targetRef = useRef();

  const isAllCompleted = Object.values(state.isAllCompleted).every(ok => ok);

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
      <Header title={'카드추가'} />
      <CardShape />
      <CardNumber />
      <DueDate />
      <CardOwner />
      <CardSecurityCode />
      <CardPassword />
      <Footer isAllCompleted={isAllCompleted} />
    </div>
  );
}

export default App;
