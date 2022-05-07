import React from 'react';
import Button from 'components/button/Button';
import { useNavigate } from 'react-router-dom';

function EditButtonContainer({ id }: { id: string }) {
  const navigate = useNavigate();

  const handleEditButtonClick = (event: any) => {
    const cardId = event.target.id;

    navigate(`/card/edit/${cardId}`);
  };

  return <Button id={id} onClick={handleEditButtonClick} buttonType="edit" />;
}

export default EditButtonContainer;
