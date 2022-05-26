import React from 'react';
import styled from '@emotion/styled';

import ButtonText from 'components/modal/ButtonText';
import TypeButton from 'components/button/TypeButton';

import { cardTypes } from '../../constants';
import { createAction } from 'context/Provider';
import { useAppDispatch } from 'hooks/hooks';
import { ActionType } from 'types';

const ButtonContainerStyled = styled.div({
  width: '375px',
  padding: '0 30px',
  margin: 'auto',
  marginTop: '100px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
});

const ButtonWrapperStyled = styled.div({
  width: '100px',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

function TypeButtonContainer() {
  const dispatch = useAppDispatch();

  const handleTypeButtonClick = (event: React.MouseEvent): void => {
    const { target } = event;
    if (target instanceof Element) {
      dispatch(createAction(ActionType.CARD_TYPE, target.id));
    }
  };

  return (
    <ButtonContainerStyled>
      {cardTypes.map((cardInfo) => (
        <ButtonWrapperStyled key={cardInfo.name}>
          <TypeButton typeButtonClick={handleTypeButtonClick} cardInfo={cardInfo} />
          <ButtonText typeButtonClick={handleTypeButtonClick} cardInfo={cardInfo} />
        </ButtonWrapperStyled>
      ))}
    </ButtonContainerStyled>
  );
}

export default TypeButtonContainer;
