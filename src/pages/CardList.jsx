import React, { useEffect } from 'react';
import useCardState from '../hooks/useCardState';

function CardList() {
  const state = useCardState();
  // useEffect(() => {
  //   console.log('state', state);
  // }, []);
  return <div>CardList</div>;
}

export default React.memo(CardList);
