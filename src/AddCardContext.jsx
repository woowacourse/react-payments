import React from 'react';
import { getCard } from './util';

const defaultCardContext = {
  card: getCard(),
  updateCard: () => {},
};

const AddCardContext = React.createContext(defaultCardContext);

export default AddCardContext;
