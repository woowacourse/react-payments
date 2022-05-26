import React from 'react';
import { Card } from './util';
import { AddCardContextInterface } from './types/CardType';

const defaultCardContext = {
  card: Card(),
  updateCard: () => {},
};

const AddCardContext = React.createContext<AddCardContextInterface>(defaultCardContext);

export default AddCardContext;
