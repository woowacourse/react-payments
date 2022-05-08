import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../../styled';

type Props = {
  marginBottom: string;
}

function AddCard({ marginBottom = '0' }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/card-register');
  };
  return <S.AddCard marginBottom={marginBottom} onClick={handleClick} />;
}

export default AddCard;
