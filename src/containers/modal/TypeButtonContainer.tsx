import { css } from '@emotion/react';
import React from 'react';
import ButtonText from 'components/modal/ButtonText';
import TypeButton from 'components/modal/TypeButton';
import { cardTypes } from '../../constants';
import { createAction } from 'context/Provider';
import { useAppDispatch } from 'hooks/hooks';
import { ActionType } from 'types';

const buttonContainerStyle = css({
  width: '375px',
  height: '160px',
  padding: '0 30px',
  position: 'absolute',
  top: '100px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
});

const buttonWrapStyle = css({
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
    <div css={buttonContainerStyle}>
      {cardTypes.map((cardInfo) => (
        <div key={cardInfo.name} css={buttonWrapStyle}>
          <TypeButton typeButtonClick={handleTypeButtonClick} cardInfo={cardInfo} />
          <ButtonText typeButtonClick={handleTypeButtonClick} cardInfo={cardInfo} />
        </div>
      ))}
    </div>
  );
}

export default TypeButtonContainer;
