import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../../styled';

function AddCard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/card-register');
  };
  return <S.AddCard onClick={handleClick} />;
}

export default AddCard;
