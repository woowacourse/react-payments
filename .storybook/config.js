import React, { useReducer } from 'react';
import CardContext from '../src/CardContext';

const StorybookWrapper = (storyFn) => <CardContext>{storyFn()}</CardContext>;
addDecorator(StorybookWrapper);
