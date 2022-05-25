import React from 'react';
import { Card } from './util';

const defaultCardContext = {
  card: Card(),
  updateCard: () => {},
};

const AddCardContext = React.createContext(defaultCardContext);

export default AddCardContext;
