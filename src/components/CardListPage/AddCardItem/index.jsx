import React, { useContext } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

import { CardBox } from './style';

import { SetPathContext } from '../../context/PathProvider';

function AddCardItem() {
  const setPath = useContext(SetPathContext);

  const handleClick = () => {
    setPath('add-card');
  };

  return (
    <CardBox onClick={handleClick}>
      <HiOutlinePlus size={30} />
    </CardBox>
  );
}

export default AddCardItem;
