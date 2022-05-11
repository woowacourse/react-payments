import React from 'react';
import Button from 'components/button/Button';

function EditButtonContainer({ id }: { id: string }) {
  const handleEditButtonClick = (event: any) => {
    const cardId = event.target.id;

    window.location.pathname = `/card/edit/${cardId}`;
  };

  return <Button id={id} onClick={handleEditButtonClick} buttonType="edit" />;
}

export default EditButtonContainer;
