import React from 'react';
import CardOwner from '../components/CardOwner';
import useInputHandler from '../hooks/useInputHandler';
import { validateOwner } from '../validator';

export default {
  title: 'CardOwner',
  component: CardOwner,
};

const Template = () => {
  const {
    errorMessage: ownerErrorMessage,
    inputValue: owner,
    updateInputState: updateOwner,
  } = useInputHandler(validateOwner, {
    name: '',
  });
  return <CardOwner errorMessage={ownerErrorMessage} owner={owner} updateOwner={updateOwner} />;
};

export const Primary = Template.bind({});
