import React from 'react';
import { Link } from 'react-router-dom';


import { AddButtonStyled, PlusStyled } from './style';

const AddButton = () => {
  return (
    <Link to='/add'>
      <AddButtonStyled>
        <PlusStyled>+</PlusStyled>
      </AddButtonStyled>
    </Link>
  );
};

export default AddButton;
