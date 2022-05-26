import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const EditButtonStyled = styled.button(
  css`
    border: none;
    background: inherit;
    cursor: pointer;
  `,
);

function EditButtonContainer({ id }: { id: string }) {
  const handleEditButtonClick = (event: any) => {
    const cardId = event.target.id;

    window.location.pathname = `/card/edit/${cardId}`;
  };

  return (
    <EditButtonStyled id={id} onClick={handleEditButtonClick}>
      수정
    </EditButtonStyled>
  );
}

export default EditButtonContainer;
