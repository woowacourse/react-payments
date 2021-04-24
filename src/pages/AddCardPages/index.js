import React from 'react';
import { AddCompletePage } from './AddCompletePage';
import { AddFormPage } from './AddFormPage';
import { PAGE } from '../../constants';

export const AddCardPage = (props) => {
  const { route, setRoute } = props;

  return (
    <>
      {route === PAGE.ADD_CARD_FORM ? (
        <AddFormPage setRoute={setRoute} />
      ) : (
        <AddCompletePage setRoute={setRoute} />
      )}
    </>
  );
};
