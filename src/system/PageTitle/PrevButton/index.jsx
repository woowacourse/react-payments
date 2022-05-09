import React from 'react';
import { Link } from 'react-router-dom';

import PrevbuttonStyled from './style';

const PrevButton = ({ hasPrevButton }) => {
  return hasPrevButton && (
    <Link to='/'>
      <PrevbuttonStyled>{'<'}</PrevbuttonStyled>
    </Link>
  );
};

export default PrevButton;
